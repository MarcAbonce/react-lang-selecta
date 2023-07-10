/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import LangSelecta from '..'

describe('LangSelecta', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0)
  })

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore()
  })

  it('does not change', () => {
    expect(render(<LangSelecta langs={['es', 'id']} />).container).toMatchSnapshot()
  })

  it('does not contain a11y violations', async () => {
    const { container } = render(
      <label>
        Select a language:
        <LangSelecta langs={['es', 'id']} />
      </label>
    )
    expect(await axe(container)).toHaveNoViolations()
  })
})
