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

export default LangSelecta
