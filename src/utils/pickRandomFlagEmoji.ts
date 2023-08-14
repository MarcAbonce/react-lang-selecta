/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { localeRegions } from '../data'
import { getFlagEmoji } from './getFlagEmoji'
import { getRandomListIndex } from './getRandomListIndex'

export const pickRandomFlagEmoji = (lang: string): string => {
  if (lang in localeRegions) {
    const regions = localeRegions[lang].regions
    const index = getRandomListIndex(regions.length)
    return getFlagEmoji(regions[index])
  } else {
    // return United Nations flag as a fallback
    return '🇺🇳'
  }
}
