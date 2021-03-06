// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.




/*! THIS FILE IS AUTO-GENERATED */

import {AuthPlus, getAPI, GoogleConfigurable} from 'googleapis-common';
import {sts_v1} from './v1';
import {sts_v1beta} from './v1beta';

export const VERSIONS = {
  v1: sts_v1.Sts,
  v1beta: sts_v1beta.Sts,
};

export function sts(version: 'v1'): sts_v1.Sts;
export function sts(options: sts_v1.Options): sts_v1.Sts;
export function sts(version: 'v1beta'): sts_v1beta.Sts;
export function sts(options: sts_v1beta.Options): sts_v1beta.Sts;
export function sts<T = sts_v1.Sts | sts_v1beta.Sts>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1' | sts_v1.Options | 'v1beta' | sts_v1beta.Options
) {
  return getAPI<T>('sts', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {sts_v1};
export {sts_v1beta};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  GaxiosPromise,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';
