/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 * 
 * Especially this Masterpiece. 🎓📜
 */

import { render } from '@testing-library/react'

import { LangSelecta } from '../components/LangSelecta'
import { useLangSelecta } from '../hooks/useLangSelecta'

// for some mysterious reason mockImplementation didn't work
// so I'll just mock this over here like a savage
jest.mock('../components/LangSelecta', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  LangSelecta: (props: any) => {
    mockUseLangSelecta(props)
    return <div />
  }
}))
jest.mock('../hooks/useLangSelecta')

const mockUseLangSelecta = jest.mocked(useLangSelecta)

describe('The ultimate unit test', () => {
  describe('when everything is mocked', () => {
    beforeEach(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mockUseLangSelecta.mockReturnValue(true as any)
    })

    it('does not change', () => {
      expect(render(<LangSelecta langs={['taq']}/>).container).toMatchSnapshot()
    })

    it('mock component calls mock hook', () => {
      render(<LangSelecta langs={[]} />)
      expect(mockUseLangSelecta).toHaveBeenCalledWith({ langs: [] })
    })

  })
})
