import { render, screen } from '@testing-library/react'
import Paper from './index'
import { mockCard, MockComponent, mockImage } from '../../__mocks__/dataMock'

describe('Paper tests', () => {
  it('renders Paper component unchanged', () => {
    const { container } = render(
      <Paper>
        <MockComponent />
      </Paper>
    )
    expect(container).toMatchSnapshot()
  })
})
