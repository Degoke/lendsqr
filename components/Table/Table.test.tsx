import { render, screen } from '@testing-library/react'
import Table from './index'
import { mockCard, mockImage } from '../../__mocks__/dataMock'

describe('Table tests', () => {
  it('renders Table component unchanged', () => {
    const { container } = render(
      <Table users={[]} toggleFilterMenu={jest.fn} />
    )
    expect(container).toMatchSnapshot()
  })
})
