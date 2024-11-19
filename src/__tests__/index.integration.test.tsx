/*
 * 🄯 2023 Marc Abonce Seguin
 *
 * SPDX-License-Identifier: LiLiQ-R-1.1 ⚜
 * License-Filename: LICENCE.txt
 */

import { render } from "@testing-library/react";
import { axe } from "jest-axe";

import LangSelecta from "..";

const extraLangData = {
  und: { name: "Undian", flags: ["🏴‍☠️"] },
};

describe("LangSelecta", () => {
  beforeEach(() => {
    jest.spyOn(global.Math, "random").mockReturnValue(0);
  });

  afterEach(() => {
    jest.spyOn(global.Math, "random").mockRestore();
  });

  it("does not change", () => {
    expect(
      render(
        <LangSelecta
          langs={["es", "id", "otq", "und"]}
          extraLangData={extraLangData}
        />,
      ).container,
    ).toMatchSnapshot();
  });

  it("does not contain a11y violations", async () => {
    const { container } = render(
      <label>
        Select a language:
        <LangSelecta
          langs={["es", "id", "oto"]}
          extraLangData={extraLangData}
        />
      </label>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
