/*
 * 🄯 2023 Marc Abonce Seguin
 *
 * SPDX-License-Identifier: LiLiQ-R-1.1 ⚜
 * License-Filename: LICENCE.txt
 */

import { render } from "@testing-library/react";

import { useLangSelecta } from "../../../hooks/useLangSelecta";

import { LangSelecta } from "..";

jest.mock("../../../hooks/useLangSelecta");

const mockUseLangSelecta = jest.mocked(useLangSelecta);

describe("LangSelecta component", () => {
  beforeEach(() => {
    mockUseLangSelecta.mockReturnValue({
      langsData: [
        {
          code: "yi",
          name: "Yugopotamian",
          flag: "🏴‍☠️",
          optionName: "🏴‍☠ Yugopotamian",
        },
        {
          code: "pl",
          name: "Pig Latin",
          flag: "🇻🇦",
          optionName: "🇻🇦 Pig Latin",
        },
      ],
    });
  });

  it("does not change", () => {
    expect(
      render(<LangSelecta langs={["yi", "pl"]} />).container,
    ).toMatchSnapshot();
  });
});
