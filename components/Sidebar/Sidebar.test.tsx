import { render, screen } from '@testing-library/react'
import SideBar from './index'
import { mockCard, mockImage } from '../../__mocks__/dataMock'

describe('SideBar tests', () => {
  it('renders SideBar component unchanged', () => {
    const { container } = render(<SideBar />)
    expect(container).toMatchSnapshot()
  })
})
