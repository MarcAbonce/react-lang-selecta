import _localeRegions from './locale_regions.json';

export type LocaleRegions = {
  [locale: string]: {
    name: string;
    regions: string[];
  }
};

export const localeRegions: LocaleRegions = _localeRegions;
