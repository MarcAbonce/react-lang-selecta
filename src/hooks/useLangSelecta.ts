import { useMemo } from 'react'

import { localeRegions } from '../data'
import { getFlagEmoji, getRandomListIndex, shuffleList } from '../utils'

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
  }>
}

export const useLangSelecta = ({ langs }: LangSelectaHookProps): LangSelectaHookResult => {
  const langsData = useMemo(() => shuffleList(langs).map(lang => {
    const langCode = lang.split('-')[0]
    return {
      code: langCode,
      name: langCode in localeRegions ? localeRegions[langCode].name : lang,
      flag: pickRandomFlagEmoji(langCode)
    }
  }), [langs])

  return { langsData }
}
