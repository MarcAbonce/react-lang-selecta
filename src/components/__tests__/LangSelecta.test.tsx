import { render } from '@testing-library/react'

import { useLangSelecta } from '../../hooks/useLangSelecta'

import LangSelecta from '../LangSelecta'

jest.mock('../../hooks/useLangSelecta')

const mockUseLangSelecta = jest.mocked(useLangSelecta)

describe('LangSelecta component', () => {
  beforeEach(() => {
    mockUseLangSelecta.mockReturnValue({
      langsData: [
        {
          code: 'yi',
          name: 'Yugopotamian',
          flag: '🏴‍☠️'
        },
        {
          code: 'pl',
          name: 'Pig Latin',
          flag: '🇻🇦'
        }
      ]
    })
  })

  it('does not change', () => {
    expect(render(<LangSelecta langs={['yi', 'pl']} />).container).toMatchSnapshot()
  })
})
