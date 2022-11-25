export interface IUser {
  id: string
  createdAt: string
  orgName: string
  userName: string
  email: string
  phoneNumber: string
  lastActiveDate: string
  profile: UserProfile
  guarantor: UserGuarantor
  accountBalance: string
  accountNumber: string
  socials: UserSocials
  education: UserEducation
  status?: UserStatus
}

export type UserStatus = 'inactive' | 'pending' | 'blacklisted' | 'active'

interface UserProfile {
  firstName: string
  lastName: string
  phoneNumber: string
  avatar: string
  gender: string
  bvn: string
  address: string
  currency: string
}

interface UserGuarantor {
  firstName: string
  lastName: string
  phoneNumber: string
  gender: string
  address: string
}

interface UserSocials {
  facebook: string
  instagram: string
  twitter: string
}

interface UserEducation {
  level: string
  employmentStatus: string
  sector: string
  duration: string
  officeEmail: string
  monthlyIncome: string[]
  loanRepayment: string
}

export type UserFilters =
  | 'orgName'
  | 'email'
  | 'userName'
  | 'createdAt'
  | 'status'
  | 'phoneNumber'
