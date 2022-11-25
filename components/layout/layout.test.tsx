import { render, screen } from '@testing-library/react'
import Layout from './index'
import { mockCard, MockComponent, mockImage } from '../../__mocks__/dataMock'

describe('Layout tests', () => {
  it('renders Layout component unchanged', () => {
    const { container } = render(
      <Layout>
        <MockComponent />
      </Layout>
    )
    expect(container).toMatchSnapshot()
  })
})
