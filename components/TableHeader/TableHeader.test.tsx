import { render, screen } from '@testing-library/react'
import TableHeader from './index'
import { mockCard, mockImage } from '../../__mocks__/dataMock'

describe('TableHeader tests', () => {
  it('renders TableHeader component unchanged', () => {
    const { container } = render(<TableHeader text={''} />)
    expect(container).toMatchSnapshot()
  })
})
