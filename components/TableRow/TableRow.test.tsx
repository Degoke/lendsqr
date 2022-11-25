import { render, screen } from '@testing-library/react'
import TableRow from './index'
import { mockCard, mockImage } from '../../__mocks__/dataMock'
import { mockUser } from '../../utils/data/user'
import { mockProvider } from '../../jest.setup'

describe('TableRow tests', () => {
  it('renders TableRow component unchanged', () => {
    const { container } = render(mockProvider(<TableRow user={mockUser[0]} />))
    expect(container).toMatchSnapshot()
  })
})
