import { useMemo } from 'react';

import { localeRegions } from '../data';
import { getFlagEmoji, getRandomListIndex, shuffleList } from "../utils";

export const pickRandomFlagEmoji = (lang: string): string => {
  if (lang in localeRegions) {
    const regions = localeRegions[lang].regions;
    const index = getRandomListIndex(regions.length);
    return getFlagEmoji(regions[index]);
  } else {
    // return United Nations flag as a fallback
    return "🇺🇳";
  }
};

export type LangSelectaHookProps = {
  langs: string[];
};

export const useLangSelecta = ({ langs } : LangSelectaHookProps) => {
  const langsData = useMemo(() => shuffleList(langs).map(lang => ({
    code: lang,
    name: lang in localeRegions ? localeRegions[lang].name : lang,
    flag: pickRandomFlagEmoji(lang),
  })), [langs]);

  return { langsData };
};
