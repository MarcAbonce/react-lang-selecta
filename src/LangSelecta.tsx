import { useMemo } from 'react';

import _localeRegions from './data/locale_regions.json';

type LocaleRegions = {
  [locale: string]: {
    name: string;
    regions: string[];
  }
};

const localeRegions: LocaleRegions = _localeRegions;

type LangSelectaProps = {
  langs: string[];
};

function getFlagEmoji(regionCode: string) {
  const codePoints = regionCode.split('').map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

function pickRandomFlagEmoji(lang: string) {
  if (lang in localeRegions) {
    const regions = localeRegions[lang].regions;
    const index = Math.floor(Math.random() * regions.length);
    return getFlagEmoji(regions[index]);
  } else {
    // return United Nations flag as a fallback
    return "🇺🇳";
  }
}

// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Modern_method
function shuffleList(list: string[]): string[] {
  const listCopy = [...list];  // to avoid mutating the original list
  const result: string[] = [];

  for (let i = 0; i < list.length; i++) {
    const index = Math.floor(Math.random() * listCopy.length);
    const pickedItem = listCopy[index];
    result.push(pickedItem);

    // overwrite picked item with last element
    const lastItem = listCopy.pop() as string;
    if (lastItem !== pickedItem) {
      listCopy[index] = lastItem;
    }
  }
  return result;
}

function LangSelecta({ langs } : LangSelectaProps): JSX.Element {
  const langsData = useMemo(() => shuffleList(langs).map(lang => ({
    code: lang,
    name: lang in localeRegions ? localeRegions[lang].name : lang,
    flag: pickRandomFlagEmoji(lang),
  })), [langs]);

  return (
    <select>
      {langsData.map(lang => (
        <option key={lang.code} value={lang.code}>{lang.flag} {lang.name}</option>
      ))}
    </select>
  );
}

export default LangSelecta;
