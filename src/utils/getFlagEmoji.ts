/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 * Yes, even this file. 🚨🏴‍☠🚨
 */

/* eslint-disable object-property-newline */
const REGIONAL_INDICATOR_ALPHABET: Record<string, string> = {
  A: '🇦', B: '🇧', C: '🇨', D: '🇩', E: '🇪', F: '🇫', G: '🇬', H: '🇭', I: '🇮', J: '🇯',
  K: '🇰', L: '🇱', M: '🇲', N: '🇳', O: '🇴', P: '🇵', Q: '🇶', R: '🇷', S: '🇸', T: '🇹',
  U: '🇺', V: '🇻', W: '🇼', X: '🇽', Y: '🇾', Z: '🇿'
}
/* eslint-enable object-property-newline */

// assumes regionCode is /^[A-Z]{2}$/
export const getFlagEmoji = (regionCode: string): string => {
  const firstLetter = regionCode[0]
  const secondLetter = regionCode[1]
  return REGIONAL_INDICATOR_ALPHABET[firstLetter] + REGIONAL_INDICATOR_ALPHABET[secondLetter]
}
