// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.




/*! THIS FILE IS AUTO-GENERATED */

import {AuthPlus, getAPI, GoogleConfigurable} from 'googleapis-common';
import {doubleclickbidmanager_v1_1} from './v1.1';
import {doubleclickbidmanager_v1} from './v1';

export const VERSIONS = {
  'v1.1': doubleclickbidmanager_v1_1.Doubleclickbidmanager,
  v1: doubleclickbidmanager_v1.Doubleclickbidmanager,
};

export function doubleclickbidmanager(
  version: 'v1.1'
): doubleclickbidmanager_v1_1.Doubleclickbidmanager;
export function doubleclickbidmanager(
  options: doubleclickbidmanager_v1_1.Options
): doubleclickbidmanager_v1_1.Doubleclickbidmanager;
export function doubleclickbidmanager(
  version: 'v1'
): doubleclickbidmanager_v1.Doubleclickbidmanager;
export function doubleclickbidmanager(
  options: doubleclickbidmanager_v1.Options
): doubleclickbidmanager_v1.Doubleclickbidmanager;
export function doubleclickbidmanager<
  T =
    | doubleclickbidmanager_v1_1.Doubleclickbidmanager
    | doubleclickbidmanager_v1.Doubleclickbidmanager
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1.1'
    | doubleclickbidmanager_v1_1.Options
    | 'v1'
    | doubleclickbidmanager_v1.Options
) {
  return getAPI<T>('doubleclickbidmanager', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {doubleclickbidmanager_v1_1};
export {doubleclickbidmanager_v1};
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
