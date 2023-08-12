/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { renderHook } from '@testing-library/react'

import { getRandomListIndex } from '../../utils/getRandomListIndex'
import { shuffleList } from '../../utils/shuffleList'

import { useLangSelecta } from '../useLangSelecta'

jest.mock('../../data', () => ({
  localeRegions: {
    es: { name: 'Castellano', regions: ['AR', 'US', 'UY'] },
    haw: { name: 'Hawaiano', regions: ['US'] },
    rm: { name: 'Romanche', regions: ['CH'] },
    ms: { name: 'Malayo', regions: ['BN', 'ID', 'MY', 'SG'] }
  }
}))
jest.mock('../../utils/getRandomListIndex')
jest.mock('../../utils/shuffleList')

const mockGetRandomListIndex = jest.mocked(getRandomListIndex)
const mockShuffleList = jest.mocked(shuffleList)

describe('useLangSelecta', () => {
  beforeEach(() => {
    mockGetRandomListIndex.mockReturnValue(0)
    mockShuffleList.mockImplementation((lst) => [...lst].reverse())
  })

  it('returns correct data with flag emojis', () => {
    const result = renderHook(() => useLangSelecta({ langs: ['es', 'rm'] })).result
    expect(result.current).toStrictEqual({
      langsData: [
        {
          code: 'rm',
          name: 'Romanche',
          flag: '🇨🇭',
          optionName: '🇨🇭 Romanche'
        },
        {
          code: 'es',
          name: 'Castellano',
          flag: '🇦🇷',
          optionName: '🇦🇷 Castellano'
        }
      ]
    })
  })

  it('uses fallback values when locales are not found in localeRegions', () => {
    const result = renderHook(() => useLangSelecta({ langs: ['xxx'] })).result
    expect(result.current).toStrictEqual({
      langsData: [
        {
          code: 'xxx',
          name: 'xxx',
          flag: '🇺🇳',
          optionName: '🇺🇳 xxx'
        }
      ]
    })
  })
})
