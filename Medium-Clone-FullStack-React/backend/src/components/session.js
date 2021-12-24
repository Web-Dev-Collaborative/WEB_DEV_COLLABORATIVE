import {Component, consume, attribute, method, expose, validators} from '@layr/component';

const {rangeLength} = validators;

const TOKEN_DURATION = 31536000000; // 1 year

export class Session extends Component {
  @consume() static User;
  @consume() static JWT;

  @expose({get: true, set: true})
  @attribute('string?', {validators: [rangeLength([10, 250])]})
  static token;

  @attribute('User?') static user;

  static async initialize() {
    if (this.token !== undefined) {
      this.user = await this.getUser({});
    }
  }

  @expose({call: true}) @method() static async getUser(attributeSelector) {
    if (this.token === undefined) {
      return;
    }

    const userId = this.verifyToken(this.token);

    if (userId === undefined) {
      // The token is invalid or expired
      this.token = undefined;
      return;
    }

    const user = await this.User.get(userId, attributeSelector, {throwIfMissing: false});

    if (user === undefined) {
      // The user doesn't exist anymore
      this.token = undefined;
      return;
    }

    return user;
  }

  static verifyToken(token) {
    const payload = this.JWT.verify(token);
    const userId = payload?.sub;

    return userId;
  }

  static generateToken(userId, {expiresIn = TOKEN_DURATION} = {}) {
    const token = this.JWT.generate({
      sub: userId,
      exp: Math.round((Date.now() + expiresIn) / 1000)
    });

    return token;
  }
}
