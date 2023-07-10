/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { type ComponentPropsWithoutRef, forwardRef } from 'react'

import { useLangSelecta } from '../hooks/useLangSelecta'

export type LangSelectaProps = {
  langs: string[]
} & ComponentPropsWithoutRef<'select'>

const LangSelecta = forwardRef<HTMLSelectElement, LangSelectaProps>(
  ({ langs, ...rest }, ref): JSX.Element => {
    const { langsData } = useLangSelecta({ langs })

    return (
      <select ref={ref} {...rest}>
        {langsData.map(lang => (
          <option key={lang.code} value={lang.code}>{lang.flag} {lang.name}</option>
        ))}
      </select>
    )
  }
)

LangSelecta.displayName = 'LangSelecta'

export { LangSelecta }
