import { render } from '@testing-library/react'

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
})
