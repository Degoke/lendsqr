import { render, screen } from '@testing-library/react'
import IconButton from './index'
import { mockCard, mockImage } from '../../__mocks__/dataMock'

describe('FilterMenu tests', () => {
  it('renders Filtermenu component unchanged', () => {
    const { container } = render(<IconButton image={mockImage} alt={''} />)
    expect(container).toMatchSnapshot()
  })
})
