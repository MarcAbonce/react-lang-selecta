/*
 * 🄯 2023 Marc Abonce Seguin
 *
 * SPDX-License-Identifier: LiLiQ-R-1.1 ⚜
 * License-Filename: LICENCE.txt
 */

import { getRandomListIndex } from './getRandomListIndex'

// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Modern_method
export const shuffleList = (list: string[]): string[] => {
  const listCopy = [...list] // to avoid mutating the original list
  const result: string[] = []

  for (let i = 0; i < list.length; i++) {
    const index = getRandomListIndex(listCopy.length)
    const pickedItem = listCopy[index]
    result.push(pickedItem)

    // overwrite picked item with last element
    const lastItem = listCopy.pop() as string
    if (lastItem !== pickedItem) {
      listCopy[index] = lastItem
    }
  }
  return result
}
