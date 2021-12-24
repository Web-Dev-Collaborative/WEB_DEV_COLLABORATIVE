import {expose, validators} from '@layr/component';
import {secondaryIdentifier, attribute, method, loader} from '@layr/storable';
import {role} from '@layr/with-roles';
import bcrypt from 'bcryptjs';

import {Entity} from './entity';

const {notEmpty, maxLength, rangeLength, match} = validators;

const USERNAME_PATTERN = '[a-zA-Z0-9]+';
const BCRYPT_SALT_ROUNDS = 5;

@expose({get: {call: true}, prototype: {load: {call: true}, save: {call: 'self'}}})
export class User extends Entity {
  @expose({get: 'self', set: ['creator', 'self']})
  @secondaryIdentifier('string', {
    validators: [rangeLength([3, 100])],

    async beforeSave() {
      const User = this.constructor.fork().detach();

      const existingUser = await User.get({email: this.email}, {}, {throwIfMissing: false});

      if (existingUser !== undefined && existingUser.id !== this.id) {
        throw Object.assign(new Error('Email already registered'), {
          displayMessage: 'This email address is already registered.'
        });
      }
    }
  })
  email = '';

  @expose({get: true, set: ['creator', 'self']})
  @secondaryIdentifier('string', {
    validators: [notEmpty(), maxLength(50), match(new RegExp(`^${USERNAME_PATTERN}$`))],

    async beforeSave() {
      const User = this.constructor.fork().detach();

      const existingUser = await User.get({username: this.username}, {}, {throwIfMissing: false});

      if (existingUser !== undefined && existingUser.id !== this.id) {
        throw Object.assign(new Error('Username already taken'), {
          displayMessage: 'This username is already taken.'
        });
      }
    }
  })
  username = '';

  @expose({set: ['creator', 'self']})
  @attribute('string', {
    validators: [notEmpty(), maxLength(100)],

    async beforeSave() {
      this.password = await this.constructor.hashPassword(this.password);
    }
  })
  password = '';

  @expose({get: true, set: 'self'})
  @attribute('string', {validators: [maxLength(200)]})
  bio = '';

  @expose({get: true, set: 'self'})
  @attribute('string', {validators: [maxLength(200)]})
  imageURL = '';

  @attribute('Article[]') favoritedArticles = [];

  @attribute('User[]') followedUsers = [];

  @expose({get: true})
  @loader(async function () {
    const {user} = this.constructor.Session;

    return user && (await this.isFollowedBy(user));
  })
  @attribute('boolean?')
  isFollowedBySessionUser;

  @role('creator') creatorRoleResolver() {
    return this.isNew();
  }

  @role('self') selfRoleResolver() {
    if (this.resolveRole('creator') || this.resolveRole('guest')) {
      return undefined;
    }

    return this === this.constructor.Session.user;
  }

  @expose({call: 'creator'}) @method() async signUp() {
    const {Session} = this.constructor;

    await this.save();

    Session.token = Session.generateToken(this.id);
  }

  @expose({call: 'creator'}) @method() async signIn() {
    const {Session} = this.constructor;

    this.validate({email: true, password: true});

    const existingUser = await this.constructor
      .fork()
      .detach()
      .get({email: this.email}, {password: true}, {throwIfMissing: false});

    if (existingUser === undefined) {
      throw Object.assign(new Error('User not found'), {
        displayMessage: 'There is no user registered with that email address.'
      });
    }

    if (!(await this.verifyPassword(existingUser))) {
      throw Object.assign(new Error('Wrong password'), {
        displayMessage: 'The password you entered is incorrect.'
      });
    }

    Session.token = Session.generateToken(existingUser.id);
  }

  @expose({call: 'self'}) @method() async favorite(article) {
    await this.load({favoritedArticles: {}});

    if (this.favoritedArticles.includes(article)) {
      return;
    }

    try {
      this.favoritedArticles = [...this.favoritedArticles, article];
      await this.save();

      await article.load({favoritesCount: true});
      article.favoritesCount++;
      await article.save();

      article.getAttribute('isFavoritedBySessionUser').setValue(true, {source: 1});
    } catch (error) {
      // Cancel frontend optimistic update
      article.getAttribute('isFavoritedBySessionUser').setValue(false, {source: 1});
      throw error;
    }
  }

  @expose({call: 'self'}) @method() async unfavorite(article) {
    await this.load({favoritedArticles: {}});

    if (!this.favoritedArticles.includes(article)) {
      return;
    }

    try {
      this.favoritedArticles = this.favoritedArticles.filter(
        (favoritedArticle) => favoritedArticle !== article
      );
      await this.save();

      await article.load({favoritesCount: true});
      article.favoritesCount--;
      await article.save();

      article.getAttribute('isFavoritedBySessionUser').setValue(false, {source: 1});
    } catch (error) {
      // Cancel frontend optimistic update
      article.getAttribute('isFavoritedBySessionUser').setValue(true, {source: 1});
      throw error;
    }
  }

  @expose({call: 'self'}) @method() async follow(user) {
    await this.load({followedUsers: {}});

    if (this.followedUsers.includes(user)) {
      return;
    }

    this.followedUsers = [...this.followedUsers, user];
    await this.save();

    user.getAttribute('isFollowedBySessionUser').setValue(true, {source: 1});
  }

  @expose({call: 'self'}) @method() async unfollow(user) {
    await this.load({followedUsers: {}});

    if (!this.followedUsers.includes(user)) {
      return;
    }

    this.followedUsers = this.followedUsers.filter((followedUser) => followedUser !== user);
    await this.save();

    user.getAttribute('isFollowedBySessionUser').setValue(false, {source: 1});
  }

  async isFollowedBy(user) {
    await user.load({followedUsers: {}});

    return user.followedUsers.includes(this);
  }

  static async hashPassword(password) {
    return await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
  }

  async verifyPassword(existingUser) {
    return await bcrypt.compare(this.password, existingUser.password);
  }
}
