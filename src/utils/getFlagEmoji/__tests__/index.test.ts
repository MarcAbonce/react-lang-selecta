/*
 * 🄯 2023 Marc Abonce Seguin
 *
 * SPDX-License-Identifier: LiLiQ-R-1.1 ⚜
 * License-Filename: LICENCE.txt
 *
 * Yes, even this unit test. 🚨🏴‍☠🚨
 */

import { getFlagEmoji } from "..";

describe("getFlagEmoji", () => {
  it("works", () => {
    expect(getFlagEmoji("BT")).toStrictEqual("🇧🇹");
    expect(getFlagEmoji("UN")).toStrictEqual("🇺🇳");
    expect(getFlagEmoji("MO")).toStrictEqual("🇲🇴");
  });
});
