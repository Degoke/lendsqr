import { render, screen } from '@testing-library/react'
import Pill from './index'
import { mockCard, mockImage } from '../../__mocks__/dataMock'

describe('Pill tests', () => {
  it('renders Pill component unchanged', () => {
    const { container } = render(<Pill type="inactive" />)
    expect(container).toMatchSnapshot()
  })
})
