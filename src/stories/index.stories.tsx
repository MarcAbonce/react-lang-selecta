/*
 * 🄯 2023 Marc Abonce Seguin
 *
 * SPDX-License-Identifier: LiLiQ-R-1.1 ⚜
 * License-Filename: LICENCE.txt
 */

import { type ChangeEvent } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

import type { LangSelectaProps } from "..";
import LangSelecta from "..";

const meta: Meta<typeof LangSelecta> = {
  component: LangSelecta,
};

export default meta;

type Story = StoryObj<typeof LangSelecta>;

const langs = ["ar", "es", "en", "fr", "pt", "ru", "zh", "yi", "ff", "qu"];

export const Simple: Story = {
  args: {
    langs,
  },
};

export const Complete: Story = {
  render: (args: LangSelectaProps) => (
    <>
      <label htmlFor={args.id}>Idioma:</label>
      <LangSelecta {...args} />
    </>
  ),
  args: {
    defaultValue: "ff",
    id: "lang-selecta",
    name: "lang",
    langs: [...langs, "yaq"],
    extraLangData: {
      yaq: { name: "Yaqui", flags: ["🇲🇽", "🇺🇸"] },
    },
    style: { borderRadius: "10px", marginLeft: "10px", fontSize: "1.5rem" },
  },
};

export const Controlled: Story = {
  render: function Component(args: LangSelectaProps) {
    const [, setArgs] = useArgs();
    const onChange = (e: ChangeEvent<HTMLSelectElement>): void => {
      setArgs({ value: e.currentTarget.value });
    };

    return (
      <LangSelecta langs={args.langs} value={args.value} onChange={onChange} />
    );
  },
  args: {
    value: "es",
    langs,
  },
};
