import {Int32} from '../lib/CodegenTypes';
import * as React from '../lib/React';
import {NativeComponent} from '../lib/codegenNativeComponent';
import codegenNativeComponent from '../lib/codegenNativeComponent';
import codegenNativeCommands from '../lib/codegenNativeCommands';
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


export type Boolean = boolean;
export type Int = Int32;
export type Void = void;

export type ScrollTo = (
  viewRef: React.Ref<'RCTView'>,
  y: Int,
  animated: Boolean
) => Void;

interface NativeCommands {
  scrollTo: ScrollTo;
}

export type ModuleProps = Readonly<ViewProps & {
  // No props or events
}>;

export const Commands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['scrollTo']
});

export default (codegenNativeComponent<ModuleProps>(
  'Module',
) as NativeComponent<ModuleProps>);