import { render, screen } from '@testing-library/react'
import StatusMenu from './index'
import { mockCard, mockImage } from '../../__mocks__/dataMock'
import { mockProvider } from '../../jest.setup'

describe('StatusMenu tests', () => {
  it('renders StatusMenu component unchanged', () => {
    const { container } = render(
      mockProvider(<StatusMenu items={[]} id={''} />)
    )
    expect(container).toMatchSnapshot()
  })
})
