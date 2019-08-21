import {NativeComponent} from '../lib/codegenNativeComponent';
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';

import {ViewProps} from '../lib/ViewPropTypes';




type PropsInFile = Readonly<{
  isEnabled: boolean;
}>;

export type ModuleProps = Readonly<ViewProps & {

  ...PropsInFile,
  isEnabled: boolean;
}>;

export default (codegenNativeComponent<ModuleProps>(
  'Module',
) as NativeComponent<ModuleProps>);