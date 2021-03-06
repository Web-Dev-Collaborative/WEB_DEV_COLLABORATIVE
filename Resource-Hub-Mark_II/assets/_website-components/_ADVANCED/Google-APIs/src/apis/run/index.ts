// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.




/*! THIS FILE IS AUTO-GENERATED */

import {AuthPlus, getAPI, GoogleConfigurable} from 'googleapis-common';
import {run_v1} from './v1';
import {run_v1alpha1} from './v1alpha1';
import {run_v1beta1} from './v1beta1';

export const VERSIONS = {
  v1: run_v1.Run,
  v1alpha1: run_v1alpha1.Run,
  v1beta1: run_v1beta1.Run,
};

export function run(version: 'v1'): run_v1.Run;
export function run(options: run_v1.Options): run_v1.Run;
export function run(version: 'v1alpha1'): run_v1alpha1.Run;
export function run(options: run_v1alpha1.Options): run_v1alpha1.Run;
export function run(version: 'v1beta1'): run_v1beta1.Run;
export function run(options: run_v1beta1.Options): run_v1beta1.Run;
export function run<T = run_v1.Run | run_v1alpha1.Run | run_v1beta1.Run>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | run_v1.Options
    | 'v1alpha1'
    | run_v1alpha1.Options
    | 'v1beta1'
    | run_v1beta1.Options
) {
  return getAPI<T>('run', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {run_v1};
export {run_v1alpha1};
export {run_v1beta1};
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
