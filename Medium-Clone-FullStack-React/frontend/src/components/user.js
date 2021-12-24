import {consume} from '@layr/component';
import React, {useMemo} from 'react';
import {Routable, route} from '@layr/routable';
import {view, useAsyncCallback} from '@layr/react-integration';

import {Entity} from './entity';

const PROFILE_IMAGE_PLACEHOLDER = '//static.productionready.io/images/smiley-cyrus.jpg';

export const User = (Base) =>
  class User extends Routable(Entity(Base)) {
    @consume() static Session;
    @consume() static Home;
    @consume() static ArticleList;

    get mentionName() {
      return this.constructor.usernameToMentionName(this.username);
    }

    static usernameToMentionName(username) {
      return '@' + username;
    }

    static mentionNameToUsername(mentionName) {
      return mentionName.slice(1);
    }

    @route('/:mentionName(@[a-zA-Z0-9]+)') static Main({mentionName}) {
      this.Articles.redirect({mentionName});
    }

    @route('/:mentionName(@[a-zA-Z0-9]+)/articles') static Articles({mentionName}) {
      return this.Content({mentionName});
    }

    @route('/:mentionName(@[a-zA-Z0-9]+)/favorites') static Favorites({mentionName}) {
      return this.Content({mentionName});
    }

    static Content({mentionName}) {
      const username = this.mentionNameToUsername(mentionName);

      return (
        <this.Loader
          query={{username}}
          attributes={{username: true, bio: true, imageURL: true, isFollowedBySessionUser: true}}
        >
          {(user) => <user.Content />}
        </this.Loader>
      );
    }

    @view() Content() {
      const {ArticleList} = this.constructor;

      const isFavoritesRoute = this.constructor.Favorites.isActive(this);

      const articleQuery = useMemo(
        () => (isFavoritesRoute ? {isFavoritedBy: this} : {author: this}),
        [isFavoritesRoute]
      );

      return (
        <div className="profile-page">
          <div className="user-info">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-10 offset-md-1">
                  <this.ProfileImage className="user-img" />
                  <h4>{this.username}</h4>
                  <p>{this.bio}</p>
                  <this.Actions />
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-10 offset-md-1">
                <this.Tabs />
                <ArticleList.Main query={articleQuery} />
              </div>
            </div>
          </div>
        </div>
      );
    }

    @view() Actions() {
      const {Session} = this.constructor;

      if (!Session.user) {
        return null;
      }

      if (this === Session.user) {
        return (
          <this.constructor.Settings.Link className="btn btn-sm btn-outline-secondary action-btn">
            <i className="ion-gear-a" /> Edit profile settings
          </this.constructor.Settings.Link>
        );
      }

      const FollowButton = () => {
        const [handleFollow, isHandlingFollow] = useAsyncCallback(async () => {
          await Session.user.follow(this);
        }, []);

        return (
          <button
            className="btn btn-sm action-btn btn-outline-secondary"
            onClick={handleFollow}
            disabled={isHandlingFollow}
          >
            <i className="ion-plus-round" /> Follow {this.username}
          </button>
        );
      };

      const UnfollowButton = () => {
        const [handleUnfollow, isHandlingUnfollow] = useAsyncCallback(async () => {
          await Session.user.unfollow(this);
        }, []);

        return (
          <button
            className="btn btn-sm action-btn btn-secondary"
            onClick={handleUnfollow}
            disabled={isHandlingUnfollow}
          >
            <i className="ion-plus-round" /> Unfollow {this.username}
          </button>
        );
      };

      return this.isFollowedBySessionUser ? <UnfollowButton /> : <FollowButton />;
    }

    @view() Tabs() {
      return (
        <div className="articles-toggle">
          <ul className="nav nav-pills outline-active">
            <li className="nav-item">
              <this.constructor.Articles.Link
                params={this}
                className="nav-link"
                activeClassName="active"
              >
                My articles
              </this.constructor.Articles.Link>
            </li>

            <li className="nav-item">
              <this.constructor.Favorites.Link
                params={this}
                className="nav-link"
                activeClassName="active"
              >
                Favorited articles
              </this.constructor.Favorites.Link>
            </li>
          </ul>
        </div>
      );
    }

    @view() ProfileImage({className = 'user-pic'}) {
      return (
        <img
          src={this.imageURL || PROFILE_IMAGE_PLACEHOLDER}
          className={className}
          alt="User's profile image"
        />
      );
    }

    @route('/register') @view() static SignUp() {
      const {Session, Home} = this;

      if (Session.user) {
        Home.Main.redirect();
        return null;
      }

      const user = new (this.fork())();

      return <user.SignUp />;
    }

    @view() SignUp() {
      const {Home, Common} = this.constructor;

      const [handleSignUp, isSigningUp, signingUpError] = useAsyncCallback(async () => {
        await this.signUp();
        Home.Main.reload();
      }, []);

      return (
        <div className="auth-page">
          <div className="container page">
            <div className="row">
              <div className="col-md-6 offset-md-3 col-xs-12">
                <h1 className="text-xs-center">Sign Up</h1>

                <p className="text-xs-center">
                  <this.constructor.SignIn.Link>Have an account?</this.constructor.SignIn.Link>
                </p>

                {signingUpError && <Common.ErrorMessage error={signingUpError} />}

                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleSignUp();
                  }}
                >
                  <fieldset>
                    <fieldset className="form-group">
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Username"
                        value={this.username}
                        onChange={({target: {value}}) => {
                          if (
                            value === '' ||
                            this.getAttribute('username').getValueType().isValidValue(value)
                          ) {
                            this.username = value;
                          }
                        }}
                        required
                      />
                    </fieldset>

                    <fieldset className="form-group">
                      <input
                        className="form-control form-control-lg"
                        type="email"
                        placeholder="Email"
                        value={this.email}
                        onChange={(event) => {
                          this.email = event.target.value;
                        }}
                        required
                      />
                    </fieldset>

                    <fieldset className="form-group">
                      <input
                        className="form-control form-control-lg"
                        type="password"
                        placeholder="Password"
                        value={this.password}
                        onChange={(event) => {
                          this.password = event.target.value;
                        }}
                        autoComplete="new-password"
                        required
                      />
                    </fieldset>

                    <button
                      className="btn btn-lg btn-primary pull-xs-right"
                      type="submit"
                      disabled={isSigningUp}
                    >
                      Sign up
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }

    @route('/login') @view() static SignIn() {
      const {Session, Home} = this;

      if (Session.user) {
        Home.Main.redirect();
        return null;
      }

      const user = new (this.fork())();

      return <user.SignIn />;
    }

    @view() SignIn() {
      const {Home, Common} = this.constructor;

      const [handleSignIn, isSigningIn, signingInError] = useAsyncCallback(async () => {
        await this.signIn();
        Home.Main.reload();
      }, []);

      return (
        <div className="auth-page">
          <div className="container page">
            <div className="row">
              <div className="col-md-6 offset-md-3 col-xs-12">
                <h1 className="text-xs-center">Sign In</h1>

                <p className="text-xs-center">
                  <this.constructor.SignUp.Link>Need an account?</this.constructor.SignUp.Link>
                </p>

                {signingInError && <Common.ErrorMessage error={signingInError} />}

                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleSignIn();
                  }}
                >
                  <fieldset>
                    <fieldset className="form-group">
                      <input
                        className="form-control form-control-lg"
                        type="email"
                        placeholder="Email"
                        value={this.email}
                        onChange={(event) => {
                          this.email = event.target.value;
                        }}
                        required
                      />
                    </fieldset>

                    <fieldset className="form-group">
                      <input
                        className="form-control form-control-lg"
                        type="password"
                        placeholder="Password"
                        value={this.password}
                        onChange={(event) => {
                          this.password = event.target.value;
                        }}
                        required
                      />
                    </fieldset>

                    <button
                      className="btn btn-lg btn-primary pull-xs-right"
                      type="submit"
                      disabled={isSigningIn}
                    >
                      Sign in
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }

    signOut() {
      const {Session, Home} = this.constructor;

      Session.token = undefined;
      Home.Main.reload();
    }

    @route('/settings') @view() static Settings() {
      const {Session, Home} = this;

      if (!Session.user) {
        Home.Main.redirect();
        return null;
      }

      return <Session.user.Settings />;
    }

    @view() Settings() {
      const {Home, Common} = this.constructor;

      const fork = useMemo(() => this.fork(), []);

      const [handleUpdate, , updatingError] = useAsyncCallback(async () => {
        await fork.save();
        this.merge(fork);
        Home.Main.navigate();
      }, [fork]);

      return (
        <div className="settings-page">
          <div className="container page">
            <div className="row">
              <div className="col-md-6 offset-md-3 col-xs-12">
                <h1 className="text-xs-center">Your Settings</h1>

                {updatingError && <Common.ErrorMessage error={updatingError} />}

                <fork.SettingsForm onSubmit={handleUpdate} />

                <hr />

                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    this.signOut();
                  }}
                >
                  Or click here to logout.
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    @view() SettingsForm({onSubmit}) {
      const [handleSubmit, isSubmitting] = useAsyncCallback(
        async (event) => {
          event.preventDefault();
          await onSubmit();
        },
        [onSubmit]
      );

      return (
        <form onSubmit={handleSubmit} autoComplete="off">
          <fieldset>
            <fieldset className="form-group">
              <input
                className="form-control"
                type="url"
                placeholder="URL of profile picture"
                value={this.imageURL}
                onChange={(event) => {
                  this.imageURL = event.target.value;
                }}
              />
            </fieldset>

            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Username"
                value={this.username}
                onChange={({target: {value}}) => {
                  if (
                    value === '' ||
                    this.getAttribute('username').getValueType().isValidValue(value)
                  ) {
                    this.username = value;
                  }
                }}
                required
              />
            </fieldset>

            <fieldset className="form-group">
              <textarea
                className="form-control form-control-lg"
                rows="8"
                placeholder="Short bio about you"
                value={this.bio}
                onChange={(event) => {
                  this.bio = event.target.value;
                }}
              ></textarea>
            </fieldset>

            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                type="email"
                placeholder="Email"
                value={this.email}
                onChange={(event) => {
                  this.email = event.target.value;
                }}
                autoComplete="off"
                required
              />
            </fieldset>

            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                type="password"
                placeholder="New password"
                value={this.getAttribute('password').getValue({throwIfUnset: false}) || ''}
                onChange={(event) => {
                  const value = event.target.value;
                  if (value) {
                    this.password = value;
                  } else {
                    this.password = undefined;
                    this.this.getAttribute('password').unset();
                  }
                }}
                autoComplete="new-password"
              />
            </fieldset>

            <button
              className="btn btn-lg btn-primary pull-xs-right"
              type="submit"
              disabled={isSubmitting}
            >
              Update settings
            </button>
          </fieldset>
        </form>
      );
    }
  };
