
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

import type {TurboModule} from '../RCTExport';
import * as TurboModuleRegistry from '../TurboModuleRegistry';

export interface Spec extends TurboModule {
  +getArray: (arg: Array<string>) => Array<string>;
  +getArray: (arg: $ReadOnlyArray<string>) => $ReadOnlyArray<string>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');
