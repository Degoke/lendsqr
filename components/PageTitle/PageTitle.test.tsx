import { render, screen } from '@testing-library/react'
import PageTitle from './index'
import { mockCard, mockImage } from '../../__mocks__/dataMock'

describe('PageTitle tests', () => {
  it('renders PageTitle component unchanged', () => {
    const { container } = render(<PageTitle title={'Hello'} />)
    expect(container).toMatchSnapshot()
  })
})
