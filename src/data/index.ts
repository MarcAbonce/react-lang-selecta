/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 * Yes, even this file. 🚨🏴‍☠🚨
 */

import _localeRegions from './locale_regions.json'

export type LocaleRegions = Record<string, {
  name: string
  regions: string[]
}>

export const localeRegions: LocaleRegions = _localeRegions
