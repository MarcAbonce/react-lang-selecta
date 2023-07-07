import { getFlagEmoji } from '../getFlagEmoji'

describe('getFlagEmoji', () => {
  it('works', () => {
    expect(getFlagEmoji('BT')).toStrictEqual('🇧🇹')
    expect(getFlagEmoji('UN')).toStrictEqual('🇺🇳')
    expect(getFlagEmoji('MO')).toStrictEqual('🇲🇴')
  })
})
