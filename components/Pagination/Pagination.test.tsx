import { render, screen } from '@testing-library/react'
import Pagination from './index'
import { mockCard, mockImage } from '../../__mocks__/dataMock'

describe('Pagination tests', () => {
  it('renders Pagination component unchanged', () => {
    const { container } = render(
      <Pagination
        currentPage={0}
        totalUsers={0}
        numberPerPage={0}
        changeCurrentPage={jest.isMockFunction}
        changeNumberPerPage={jest.isMockFunction}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
