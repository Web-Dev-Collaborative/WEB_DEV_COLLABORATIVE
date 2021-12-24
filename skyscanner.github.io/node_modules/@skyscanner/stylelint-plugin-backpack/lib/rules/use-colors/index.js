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

const stylelint = require('stylelint');
const _ = require('lodash');
const tinycolor = require('tinycolor2');

const { tokensByCategory, tokensByType } = require('../../utils/token-utils');

const COLOR_ALLOWLIST = ['transparent'];
const COLOR_PROPS = [
  'color',
  'background-color',
  'border-color',
  'border-bottom-color',
  'border-left-color',
  'border-right-color',
  'border-top-color',
  'outline-color',
  'text-decoration-color',
];

// Workaround so that Gradient token does not get provided over Sky Blue
const COLORS = tokensByCategory('colors').filter(
  el => el.name !== '$bpk-color-primary-gradient-light',
);

const allBpkTokenColors = tokensByType('color');

const ruleName = 'backpack/use-colors';

const messages = stylelint.utils.ruleMessages(ruleName, {
  expected: (prop, selector) =>
    `Use the following Backpack token for ${prop} instead: ${selector}`,
});

const rule = primaryOption => {
  return (postcssRoot, postcssResult) => {
    // If rule is disabled then we don't run the rule
    const validOptions = stylelint.utils.validateOptions(
      postcssResult,
      ruleName,
      {
        actual: primaryOption,
        possible: [true, false],
      },
    );

    if (!validOptions) {
      return;
    }

    if (!primaryOption) {
      return;
    }

    postcssRoot.walkDecls(decl => {
      const { prop, value } = decl;

      // Return early if decl is not a colour to avoid needlessly parsing
      if (!COLOR_PROPS.includes(prop)) return;

      // If a Backpack color is already in use then we don't need to process further
      if (allBpkTokenColors.filter(color => color.name === value)[0]) return;

      // Return if the color is in the allowed values list
      if (COLOR_ALLOWLIST.filter(color => value === color).length) return;

      // Extract the color rgb string and check if it exists as a Backpack color
      const color = tinycolor(value);
      const expectedToken = _.find(COLORS, { value: color.toRgbString() });

      let message;

      // If we find a color match then we give a token to use
      // otherwise we don't have a match and tell users to use a Backpack token
      if (expectedToken) {
        message = messages.expected(prop, expectedToken.name);
      } else {
        message = `The color "${value}" is not a valid colour for "${prop}". Use a Backpack token instead`;
      }

      // Report back the violation
      stylelint.utils.report({
        ruleName,
        result: postcssResult,
        message,
        node: decl,
        word: value,
      });
    });
  };
};

module.exports = stylelint.createPlugin(ruleName, rule);
