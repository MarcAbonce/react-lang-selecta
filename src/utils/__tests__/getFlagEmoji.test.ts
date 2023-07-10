/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 * Yes, even this unit test. 🚨🏴‍☠🚨
 */

import { getFlagEmoji } from '../getFlagEmoji'

describe('getFlagEmoji', () => {
  it('works', () => {
    expect(getFlagEmoji('BT')).toStrictEqual('🇧🇹')
    expect(getFlagEmoji('UN')).toStrictEqual('🇺🇳')
    expect(getFlagEmoji('MO')).toStrictEqual('🇲🇴')
  })
})
