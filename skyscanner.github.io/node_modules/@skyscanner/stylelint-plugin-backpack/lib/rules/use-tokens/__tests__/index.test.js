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

const { lint } = require('stylelint');

const config = {
  plugins: ['./index.js'],
  rules: {
    'backpack/use-tokens': [true],
  },
};

describe('Spacing token tests', () => {
  it('passes when setting spacing', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code: 'a { width: $bpk-heading-content-margin-top; font-size: 14rem }',
      config,
    });

    expect(warnings).toHaveLength(0);
  });

  it('passes when using multiples of spacing', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code: 'a { width: $bpk-spacing-md * 2; font-size: 14rem }',
      config,
    });

    expect(warnings).toHaveLength(0);
  });

  it('passes when setting negative number', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code: 'a { width: -$bpk-heading-content-margin-top; font-size: 14rem }',
      config,
    });

    expect(warnings).toHaveLength(0);
  });

  it('passes when `auto` used as an allowed value', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code: 'a { width: auto; font-size: 14rem }',
      config,
    });

    expect(warnings).toHaveLength(0);
  });

  it('passes when unit `%` used as an allowed unit', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code: 'a { width: 100%; font-size: 14rem }',
      config,
    });

    expect(warnings).toHaveLength(0);
  });

  it('should not throw as it uses a function', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code:
        '@import "~bpk-mixins/index"; a { height: calc(#{$bpk-spacing-lg} - 1px); font-size: 14rem; }',
      config,
    });

    expect(warnings).toHaveLength(0);
  });

  it('fails when using multiples of numbers', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code: 'a { width: 2rem * 2; font-size: 14rem }',
      config,
    });

    expect(warnings).toHaveLength(1);
    expect(warnings[0].text).toBe(
      "Don't use raw numbers for `width` instead use a Backpack token or multiples of a token (backpack/use-tokens)",
    );
  });

  it('throws an error when using raw number', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code: '@import "~bpk-mixins/index"; a { width: 5rem; font-size: 14rem; }',
      config,
    });

    expect(warnings).toHaveLength(1);
    expect(warnings[0].text).toBe(
      "Don't use raw numbers for `width` instead use a Backpack token or multiples of a token (backpack/use-tokens)",
    );
  });

  it('should pass when using custom variable', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code:
        '@import "~bpk-mixins/index"; $width-val:5rem a { width: $width-val; font-size: 14rem; }',
      config,
    });

    expect(warnings).toHaveLength(0);
  });

  it('should not run/report issues when disabled', async () => {
    const {
      errored,
      results: [{ warnings, invalidOptionWarnings }],
    } = await lint({
      code: 'a { width: 10rem; }',
      config: {
        plugins: ['./index.js'],
        rules: {
          'backpack/use-tokens': false,
        },
      },
    });

    expect(errored).toBeFalsy();
    expect(warnings).toHaveLength(0);
    expect(invalidOptionWarnings).toHaveLength(0);
  });

  it('should error on non-supported options', async () => {
    const {
      errored,
      results: [{ warnings, invalidOptionWarnings }],
    } = await lint({
      code: 'a { width: $bpk-spacing-sm; }',
      config: {
        plugins: ['./index.js'],
        rules: {
          'backpack/use-tokens': 'warn',
        },
      },
    });

    expect(errored).toBeTruthy();
    expect(warnings).toHaveLength(0);
    expect(invalidOptionWarnings).toHaveLength(1);
  });
});

describe('Radii token tests', () => {
  it('passes when setting radius', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code: 'a { border-radius: $bpk-border-radius-sm; font-size: 14rem }',
      config,
    });

    expect(warnings).toHaveLength(0);
  });

  it('should throw an error when a function is used', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code:
        '@import "~bpk-mixins/index"; a { border-radius: calc(#{$bpk-border-radius-sm} - 1px); font-size: 14rem; }',
      config,
    });

    expect(warnings).toHaveLength(1);
    expect(warnings[0].text).toBe(
      "Don't use raw numbers for `border-radius` instead use a Backpack token or multiples of a token (backpack/use-tokens)",
    );
  });

  it('throws an error when using raw number', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code:
        '@import "~bpk-mixins/index"; a { border-radius: 5rem; font-size: 14rem; }',
      config,
    });

    expect(warnings).toHaveLength(1);
    expect(warnings[0].text).toBe(
      "Don't use raw numbers for `border-radius` instead use a Backpack token or multiples of a token (backpack/use-tokens)",
    );
  });

  it('should pass when using custom variable', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code:
        '@import "~bpk-mixins/index"; $radius-val:5rem a { border-radius: $radius-val; font-size: 14rem; }',
      config,
    });

    expect(warnings).toHaveLength(0);
  });

  it('should not run/report issues when disabled', async () => {
    const {
      errored,
      results: [{ warnings, invalidOptionWarnings }],
    } = await lint({
      code: 'a { border-radius: $bpk-border-radius-sm; }',
      config: {
        plugins: ['./index.js'],
        rules: {
          'backpack/use-tokens': false,
        },
      },
    });

    expect(errored).toBeFalsy();
    expect(warnings).toHaveLength(0);
    expect(invalidOptionWarnings).toHaveLength(0);
  });
});

describe('Border token tests', () => {
  it('passes when setting border-width', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code: 'a { border-width: $bpk-border-size-sm; font-size: 14rem }',
      config,
    });

    expect(warnings).toHaveLength(0);
  });

  it('should throw as it uses a function', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code:
        '@import "~bpk-mixins/index"; a { border-width: calc(#{$bpk-border-size-sm} - 1px); font-size: 14rem; }',
      config,
    });

    expect(warnings).toHaveLength(1);
    expect(warnings[0].text).toBe(
      "Don't use raw numbers for `border-width` instead use a Backpack token or multiples of a token (backpack/use-tokens)",
    );
  });

  it('throws an error when using raw number', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code:
        '@import "~bpk-mixins/index"; a { border-width: 5rem; font-size: 14rem; }',
      config,
    });

    expect(warnings).toHaveLength(1);
    expect(warnings[0].text).toBe(
      "Don't use raw numbers for `border-width` instead use a Backpack token or multiples of a token (backpack/use-tokens)",
    );
  });

  it('throws an error when specifying a number and token', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code:
        '@import "~bpk-mixins/index"; a { border-width: 5rem  $bpk-border-size-sm 5rem $bpk-border-size-sm; font-size: 14rem; }',
      config,
    });

    expect(warnings).toHaveLength(1);
    expect(warnings[0].text).toBe(
      "Don't use raw numbers for `border-width` instead use a Backpack token or multiples of a token (backpack/use-tokens)",
    );
  });

  it('should pass when using custom variable', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code:
        '@import "~bpk-mixins/index"; $border-val:5rem a { border-width: $radius-val; font-size: 14rem; }',
      config,
    });

    expect(warnings).toHaveLength(0);
  });

  it('should pass when using border-top-width', async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      code:
        '@import "~bpk-mixins/index"; { border-top-width: $bpk-border-size-sm; font-size: 14rem; }',
      config,
    });

    expect(warnings).toHaveLength(0);
  });

  it('should not run/report issues when disabled', async () => {
    const {
      errored,
      results: [{ warnings, invalidOptionWarnings }],
    } = await lint({
      code: 'a { border-width: $bpk-border-size-sm; }',
      config: {
        plugins: ['./index.js'],
        rules: {
          'backpack/use-tokens': false,
        },
      },
    });

    expect(errored).toBeFalsy();
    expect(warnings).toHaveLength(0);
    expect(invalidOptionWarnings).toHaveLength(0);
  });
});
