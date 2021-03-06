// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.




/*! THIS FILE IS AUTO-GENERATED */

import {AuthPlus, getAPI, GoogleConfigurable} from 'googleapis-common';
import {displayvideo_v1} from './v1';
import {displayvideo_v1beta} from './v1beta';
import {displayvideo_v1beta2} from './v1beta2';
import {displayvideo_v1dev} from './v1dev';

export const VERSIONS = {
  v1: displayvideo_v1.Displayvideo,
  v1beta: displayvideo_v1beta.Displayvideo,
  v1beta2: displayvideo_v1beta2.Displayvideo,
  v1dev: displayvideo_v1dev.Displayvideo,
};

export function displayvideo(version: 'v1'): displayvideo_v1.Displayvideo;
export function displayvideo(
  options: displayvideo_v1.Options
): displayvideo_v1.Displayvideo;
export function displayvideo(
  version: 'v1beta'
): displayvideo_v1beta.Displayvideo;
export function displayvideo(
  options: displayvideo_v1beta.Options
): displayvideo_v1beta.Displayvideo;
export function displayvideo(
  version: 'v1beta2'
): displayvideo_v1beta2.Displayvideo;
export function displayvideo(
  options: displayvideo_v1beta2.Options
): displayvideo_v1beta2.Displayvideo;
export function displayvideo(version: 'v1dev'): displayvideo_v1dev.Displayvideo;
export function displayvideo(
  options: displayvideo_v1dev.Options
): displayvideo_v1dev.Displayvideo;
export function displayvideo<
  T =
    | displayvideo_v1.Displayvideo
    | displayvideo_v1beta.Displayvideo
    | displayvideo_v1beta2.Displayvideo
    | displayvideo_v1dev.Displayvideo
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | displayvideo_v1.Options
    | 'v1beta'
    | displayvideo_v1beta.Options
    | 'v1beta2'
    | displayvideo_v1beta2.Options
    | 'v1dev'
    | displayvideo_v1dev.Options
) {
  return getAPI<T>('displayvideo', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {displayvideo_v1};
export {displayvideo_v1beta};
export {displayvideo_v1beta2};
export {displayvideo_v1dev};
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
