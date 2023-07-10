/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
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
