import { render, screen } from '@testing-library/react'
import ListItem from './index'
import { mockCard, mockImage, mockList } from '../../__mocks__/dataMock'

describe('ListItem tests', () => {
  it('renders ListItem component unchanged', () => {
    const { container } = render(<ListItem item={mockList.items[0]} />)
    expect(container).toMatchSnapshot()
  })
})
