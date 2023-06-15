import React from 'react';

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

function LangSelecta({ langs } : LangSelectaProps) {
  const langsData = langs.map(lang => ({
    code: lang,
    name: lang in localeRegions ? localeRegions[lang].name : lang,
    flag: pickRandomFlagEmoji(lang),
  }));

  return (
    <select>
      {langsData.map(lang => (
        <option value={lang.code}>{lang.flag} {lang.name}</option>
      ))}
    </select>
  );
}

export default LangSelecta;
