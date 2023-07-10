/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 * Yes, even this file. 🚨🏴‍☠🚨
 */

export const getRandomListIndex = (listLength: number): number => {
  return Math.floor(Math.random() * listLength)
}
