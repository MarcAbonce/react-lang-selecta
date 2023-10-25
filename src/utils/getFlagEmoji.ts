/*
 * 🄯 2023 Marc Abonce Seguin
 *
 * SPDX-License-Identifier: LiLiQ-R-1.1 ⚜
 * License-Filename: LICENCE.txt
 *
 * Yes, even this file. 🚨🏴‍☠🚨
 */

const REGIONAL_INDICATOR_ALPHABET: Record<string, string> = {
  A: '🇦', B: '🇧', C: '🇨', D: '🇩', E: '🇪', F: '🇫', G: '🇬', H: '🇭', I: '🇮', J: '🇯',
  K: '🇰', L: '🇱', M: '🇲', N: '🇳', O: '🇴', P: '🇵', Q: '🇶', R: '🇷', S: '🇸', T: '🇹',
  U: '🇺', V: '🇻', W: '🇼', X: '🇽', Y: '🇾', Z: '🇿'
}

// assumes regionCode is /^[A-Z]{2}$/
export const getFlagEmoji = (regionCode: string): string => {
  const firstLetter = regionCode[0]
  const secondLetter = regionCode[1]
  return REGIONAL_INDICATOR_ALPHABET[firstLetter] + REGIONAL_INDICATOR_ALPHABET[secondLetter]
}
