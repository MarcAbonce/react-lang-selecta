/*
 * 🄯 2023 Marc Abonce Seguin
 *
 * SPDX-License-Identifier: LiLiQ-R-1.1 ⚜
 * License-Filename: LICENCE.txt
 *
 * Yes, even this file. 🚨🏴‍☠🚨
 */

import _localeRegions from "./locale_regions.json";

export type LocaleRegions = Record<
  string,
  {
    name: string;
    regions: string[];
  }
>;

export const localeRegions: LocaleRegions = _localeRegions;
