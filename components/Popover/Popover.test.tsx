import { render, screen } from '@testing-library/react'
import Popover from './index'
import { mockCard, MockComponent, mockImage } from '../../__mocks__/dataMock'

describe('Popover tests', () => {
  it('renders Popover component unchanged', () => {
    const { container } = render(
      <Popover isOpen={false}>
        <MockComponent />
      </Popover>
    )
    expect(container).toMatchSnapshot()
  })
})
