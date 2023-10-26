/*
 * 🄯 2023 Marc Abonce Seguin
 *
 * SPDX-License-Identifier: LiLiQ-R-1.1 ⚜
 * License-Filename: LICENCE.txt
 */

import { useMemo } from "react";
import leftPad from "left-pad";

import { localeRegions } from "../data";
import { getRandomListIndex } from "../utils/getRandomListIndex";
import { shuffleList } from "../utils/shuffleList";
import type { ExtraLangData } from "../types";
import { pickRandomFlagEmoji } from "../utils/pickRandomFlagEmoji";

export interface LangSelectaHookProps {
  langs: string[];
  extraLangData?: ExtraLangData;
}

export interface LangSelectaHookResult {
  langsData: {
    code: string;
    name: string;
    flag: string;
    optionName: string;
  }[];
}

export const useLangSelecta = ({
  langs,
  extraLangData,
}: LangSelectaHookProps): LangSelectaHookResult => {
  const langsData = useMemo(
    () =>
      shuffleList(langs).map((lang) => {
        let langCode, name, flag;
        // extraLangData can override localeRegions
        if (extraLangData !== undefined && lang in extraLangData) {
          const langFlags = extraLangData[lang].flags;
          flag = langFlags[getRandomListIndex(langFlags.length)];
          langCode = lang;
          name = extraLangData[lang].name;
        } else {
          langCode = lang.split("-")[0];
          flag = pickRandomFlagEmoji(langCode);
          name =
            langCode in localeRegions ? localeRegions[langCode].name : lang;
        }

        const optionName = flag + leftPad(name, name.length + 1);

        return {
          code: langCode,
          name,
          flag,
          optionName,
        };
      }),
    [langs, extraLangData],
  );

  return { langsData };
};
