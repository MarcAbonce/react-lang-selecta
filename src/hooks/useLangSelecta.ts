/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useMemo } from 'react'
import leftPad from 'left-pad'

import { localeRegions } from '../data'
import { getFlagEmoji } from '../utils/getFlagEmoji'
import { getRandomListIndex } from '../utils/getRandomListIndex'
import { shuffleList } from '../utils/shuffleList'

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

export interface LangSelectaHookProps {
  langs: string[]
}

export interface LangSelectaHookResult {
  langsData: Array<{
    code: string
    name: string
    flag: string
    optionName: string
  }>
}

export const useLangSelecta = ({ langs }: LangSelectaHookProps): LangSelectaHookResult => {
  const langsData = useMemo(() => shuffleList(langs).map(lang => {
    const langCode = lang.split('-')[0]
    const flag = pickRandomFlagEmoji(langCode)
    const name = langCode in localeRegions ? localeRegions[langCode].name : lang
    const optionName = flag + leftPad(name, name.length + 1)

    return {
      code: langCode,
      name,
      flag,
      optionName
    }
  }), [langs])

  return { langsData }
}
