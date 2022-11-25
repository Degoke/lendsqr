import { render, screen } from '@testing-library/react'
import { mockProvider } from '../../jest.setup'
import FilterMenu from './index'

describe('FilterMenu tests', () => {
  it('renders Filtermenu component unchanged', () => {
    const { container } = render(
      mockProvider(<FilterMenu isOpen={false} toggleFilterMenu={jest.fn} />)
    )
    expect(container).toMatchSnapshot()
  })

  it('renders Filtermenu when is open is true', () => {
    render(
      mockProvider(<FilterMenu isOpen={true} toggleFilterMenu={jest.fn} />)
    )
    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  it('dosent render Filtermenu when is open is false', () => {
    render(
      mockProvider(<FilterMenu isOpen={false} toggleFilterMenu={jest.fn} />)
    )
    expect(screen.queryByRole('form')).toBeNull()
  })
})
