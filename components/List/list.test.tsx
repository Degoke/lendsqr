import { render, screen } from '@testing-library/react'
import List from './index'
import { mockCard, mockImage, mockList } from '../../__mocks__/dataMock'

describe('List tests', () => {
  it('renders List component unchanged', () => {
    const { container } = render(
      <List items={mockList.items} title={mockList.title} />
    )
    expect(container).toMatchSnapshot()
  })
})
