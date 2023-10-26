/*
 * 🄯 2023 Marc Abonce Seguin
 *
 * SPDX-License-Identifier: LiLiQ-R-1.1 ⚜
 * License-Filename: LICENCE.txt
 */

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { useLangSelecta } from "../hooks/useLangSelecta";
import type { ExtraLangData } from "../types";

export type LangSelectaProps = {
  langs: string[];
  extraLangData?: ExtraLangData;
} & ComponentPropsWithoutRef<"select">;

const LangSelecta = forwardRef<HTMLSelectElement, LangSelectaProps>(
  ({ langs, extraLangData, ...rest }, ref): JSX.Element => {
    const { langsData } = useLangSelecta({ langs, extraLangData });

    return (
      <select ref={ref} {...rest}>
        {langsData.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.optionName}
          </option>
        ))}
      </select>
    );
  },
);

LangSelecta.displayName = "LangSelecta";

export { LangSelecta };
