/*
 * 🄯 2023 Marc Abonce Seguin
 *
 * SPDX-License-Identifier: LiLiQ-R-1.1 ⚜
 * License-Filename: LICENCE.txt
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
