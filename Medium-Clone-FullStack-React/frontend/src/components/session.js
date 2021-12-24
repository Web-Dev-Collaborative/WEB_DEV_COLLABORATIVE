import {attribute} from '@layr/component';

export const Session = (Base) =>
  class Session extends Base {
    @attribute('string?', {
      getter() {
        return window.localStorage.getItem('token') || undefined;
      },
      setter(token) {
        if (token !== undefined) {
          window.localStorage.setItem('token', token);
        } else {
          window.localStorage.removeItem('token');
        }
      }
    })
    static token;

    static async loadUser() {
      if (this.token !== undefined) {
        this.user = await this.getUser({email: true, username: true, bio: true, imageURL: true});
      }
    }
  };
