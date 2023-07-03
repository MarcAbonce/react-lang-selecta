export const getFlagEmoji = (regionCode: string): string => {
  const codePoints = regionCode.split('').map((char) => 127397 + char.charCodeAt(0))
  return String.fromCodePoint(...codePoints)
}
