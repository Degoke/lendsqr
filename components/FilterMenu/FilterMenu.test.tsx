import { render, screen } from '@testing-library/react'
import FilterMenu from './index'

describe('FilterMenu tests', () => {
  it('renders Filtermenu component unchanged', () => {
    const { container } = render(<FilterMenu isOpen={false} />)
    expect(container).toMatchSnapshot()
  })

  it('renders Filtermenu when is open is true', () => {
    render(<FilterMenu isOpen={true} />)
    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  it('dosent render Filtermenu when is open is false', () => {
    render(<FilterMenu isOpen={false} />)
    expect(screen.queryByRole('form')).toBeNull()
  })
})
