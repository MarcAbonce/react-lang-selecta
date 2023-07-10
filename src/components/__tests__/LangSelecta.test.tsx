/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render } from '@testing-library/react'

import { useLangSelecta } from '../../hooks/useLangSelecta'

import { LangSelecta } from '../LangSelecta'

jest.mock('../../hooks/useLangSelecta')

const mockUseLangSelecta = jest.mocked(useLangSelecta)

describe('LangSelecta component', () => {
  beforeEach(() => {
    mockUseLangSelecta.mockReturnValue({
      langsData: [
        {
          code: 'yi',
          name: 'Yugopotamian',
          flag: '🏴‍☠️'
        },
        {
          code: 'pl',
          name: 'Pig Latin',
          flag: '🇻🇦'
        }
      ]
    })
  })

  it('does not change', () => {
    expect(render(<LangSelecta langs={['yi', 'pl']} />).container).toMatchSnapshot()
  })
})
