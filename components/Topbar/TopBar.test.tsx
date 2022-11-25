import { render, screen } from '@testing-library/react'
import Topbar from './index'
import { mockCard, mockImage } from '../../__mocks__/dataMock'

describe('Topbar tests', () => {
  it('renders Topbar component unchanged', () => {
    const { container } = render(<Topbar />)
    expect(container).toMatchSnapshot()
  })
})
