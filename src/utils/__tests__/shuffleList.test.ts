/*
 * 🄯 2023 Marc Abonce Seguin
 *
 * SPDX-License-Identifier: LiLiQ-R-1.1 ⚜
 * License-Filename: LICENCE.txt
 *
 * Yes, even this unit test. 🚨🏴‍☠🚨
 */

import { getRandomListIndex } from '../getRandomListIndex'

import { shuffleList } from '../shuffleList'

jest.mock('../getRandomListIndex')

const mockGetRandomListIndex = jest.mocked(getRandomListIndex)

// this test is too implementation-specific
// but I'm not testing the randomness, I'm just testing that the function doesn't break
describe('shuffleList', () => {
  beforeEach(() => {
    mockGetRandomListIndex.mockReturnValue(0)
  })

  it('shuffles list', () => {
    expect(shuffleList(['a', 'b', 'c', 'd', 'e'])).toStrictEqual(['a', 'e', 'd', 'c', 'b'])
  })
})
