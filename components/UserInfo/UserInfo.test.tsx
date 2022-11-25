import { render, screen } from '@testing-library/react'
import PersonalInfo from './personalInfo'
import { mockCard, mockImage } from '../../__mocks__/dataMock'
import { mockUser } from '../../utils/data/user'
import UserEducation from './userEducation'
import UserGuarantor from './userGuarantor'
import UserSocials from './userSocials'

describe('PersonalInfo tests', () => {
  it('renders PersonalInfo component unchanged', () => {
    const { container } = render(<PersonalInfo user={mockUser[0]} />)
    expect(container).toMatchSnapshot()
  })
})

describe('UserEducation tests', () => {
  it('renders UserEducation component unchanged', () => {
    const { container } = render(<UserEducation user={mockUser[0]} />)
    expect(container).toMatchSnapshot()
  })
})

describe('UserGuarantor tests', () => {
  it('renders UserGuarantor component unchanged', () => {
    const { container } = render(<UserGuarantor user={mockUser[0]} />)
    expect(container).toMatchSnapshot()
  })
})

describe('UserSocials tests', () => {
  it('renders UserSocials component unchanged', () => {
    const { container } = render(<UserSocials user={mockUser[0]} />)
    expect(container).toMatchSnapshot()
  })
})
