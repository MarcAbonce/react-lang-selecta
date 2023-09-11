/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { forwardRef, type ComponentPropsWithoutRef } from 'react'

import { useLangSelecta } from '../hooks/useLangSelecta'
import type { ExtraLangData } from '../types'

export type LangSelectaProps = {
  langs: string[]
  extraLangData?: ExtraLangData
} & ComponentPropsWithoutRef<'select'>

const LangSelecta = forwardRef<HTMLSelectElement, LangSelectaProps>(
  ({ langs, extraLangData, ...rest }, ref): JSX.Element => {
    const { langsData } = useLangSelecta({ langs, extraLangData })

    return (
      <select ref={ref} {...rest}>
        {langsData.map(lang => (
          <option key={lang.code} value={lang.code}>{lang.optionName}</option>
        ))}
      </select>
    )
  }
)

LangSelecta.displayName = 'LangSelecta'

export { LangSelecta }
