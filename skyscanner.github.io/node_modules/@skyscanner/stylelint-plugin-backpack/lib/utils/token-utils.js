/*
 Copyright 2020 Skyscanner
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

const _ = require('lodash');
const { props: WEB_TOKENS } = require('bpk-tokens/tokens/base.raw.json');

const TOKENS = _.mapKeys(WEB_TOKENS, (value, key) => `${key}`);

/*
 * Gets all tokens based on type e.g. `color` or  `media-query`
 */
module.exports.tokensByCategory = category =>
  _.chain(TOKENS)
    .filter({ category })
    .map(({ name, value }) => ({
      name: `$bpk-${_.kebabCase(name)}`,
      value,
    }))
    .value();

/*
 * Gets all tokens based on type to ensure we capture all tokens
 * e.g. `color` spans different tokens but fall under other catergories
 */
module.exports.tokensByType = type =>
  _.chain(TOKENS)
    .filter({ type })
    .map(({ name, value }) => ({
      name: `$bpk-${_.kebabCase(name)}`,
      value,
    }))
    .value();
