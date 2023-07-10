import { render } from '@testing-library/react'
import { axe } from 'jest-axe'

import LangSelecta from '../components/LangSelecta'

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
