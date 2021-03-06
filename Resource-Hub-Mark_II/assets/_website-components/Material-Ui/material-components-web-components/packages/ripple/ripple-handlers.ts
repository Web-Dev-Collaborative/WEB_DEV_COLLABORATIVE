/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import {RippleInterface} from '@material/mwc-base/utils';

export interface RippleAPI extends RippleInterface {
  startHover: () => void;
  endHover: () => void;
}

/**
 * Class that encapsulates the events handlers for `mwc-ripple`
 *
 *
 * Example:
 * ```
 * class XFoo extends LitElement {
 *   async getRipple() {
 *     this.renderRipple = true;
 *     await this.updateComplete;
 *     return this.renderRoot.querySelector('mwc-ripple');
 *   }
 *   rippleHandlers = new RippleHandlers(() => this.getRipple());
 *
 *   render() {
 *     return html`
 *       <div @mousedown=${this.rippleHandlers.startPress}></div>
 *       ${this.renderRipple ? html`<mwc-ripple></mwc-ripple>` : ''}
 *     `;
 *   }
 * }
 * ```
 */
export class RippleHandlers implements RippleAPI {
  startPress: (ev?: Event) => void;
  endPress: () => void;
  startFocus: () => void;
  endFocus: () => void;
  startHover: () => void;
  endHover: () => void;

  constructor(
      /** Function that returns a `mwc-ripple` */
      rippleFn: () => Promise<RippleAPI|null>) {
    this.startPress = (ev?: Event) => {
      rippleFn().then((r) => {
        r && r.startPress(ev);
      });
    };
    this.endPress = () => {
      rippleFn().then((r) => {
        r && r.endPress();
      });
    };
    this.startFocus = () => {
      rippleFn().then((r) => {
        r && r.startFocus();
      });
    };
    this.endFocus = () => {
      rippleFn().then((r) => {
        r && r.endFocus();
      });
    };
    this.startHover = () => {
      rippleFn().then((r) => {
        r && r.startHover();
      });
    };
    this.endHover = () => {
      rippleFn().then((r) => {
        r && r.endHover();
      });
    };
  }
}
