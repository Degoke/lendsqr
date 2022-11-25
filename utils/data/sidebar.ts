import { urls } from '../constants/urls'
import { IListItem } from '../types/list'
import Users from '../../public/images/users.svg'
import Guarantors from '../../public/images/guarantors.svg'
import Loans from '../../public/images/loans.svg'
import Decision from '../../public/images/decision.svg'
import Savings from '../../public/images/savings.svg'
import Whitelist from '../../public/images/whitelist.svg'
import Karma from '../../public/images/karma.svg'
import Products from '../../public/images/products.svg'
import Fees from '../../public/images/fees.svg'
import Transactions from '../../public/images/transactions.svg'
import Services from '../../public/images/services.svg'
import Service from '../../public/images/service.svg'
import Settlements from '../../public/images/settlements.svg'
import Reports from '../../public/images/reports.svg'
import Pricing from '../../public/images/pricing.svg'
import Audit from '../../public/images/audit.svg'
import Requests from '../../public/images/requests.svg'
import Organization from '../../public/images/organization.svg'
import Preferences from '../../public/images/preferences.svg'

interface ISideBarData {
  title: string
  items: IListItem[]
}

export const sidebarData: ISideBarData[] = [
  {
    title: 'customers',
    items: [
      {
        text: 'users',
        url: urls.USERS,
        icon: Users,
      },
      {
        text: 'guarantors',
        url: '',
        icon: Guarantors,
      },
      {
        text: 'loans',
        url: '',
        icon: Loans,
      },
      {
        text: 'decision models',
        url: '',
        icon: Decision,
      },
      {
        text: 'savings',
        url: '',
        icon: Savings,
      },
      {
        text: 'loan requests',
        url: '',
        icon: Requests,
      },
      {
        text: 'whitelist',
        url: '',
        icon: Whitelist,
      },
      {
        text: 'karma',
        url: '',
        icon: Karma,
      },
    ],
  },
  {
    title: 'businesses',
    items: [
      {
        text: 'organization',
        url: '',
        icon: Organization,
      },
      {
        text: 'loan products',
        url: '',
        icon: Loans,
      },
      {
        text: 'savings products',
        url: '',
        icon: Products,
      },
      {
        text: 'fees and charges',
        url: '',
        icon: Fees,
      },
      {
        text: 'transactions',
        url: '',
        icon: Transactions,
      },
      {
        text: 'services',
        url: '',
        icon: Services,
      },
      {
        text: 'service accounts',
        url: '',
        icon: Service,
      },
      {
        text: 'settlements',
        url: '',
        icon: Settlements,
      },
      {
        text: 'reports',
        url: '',
        icon: Reports,
      },
    ],
  },
  {
    title: 'settings',
    items: [
      {
        text: 'preferences',
        url: '',
        icon: Preferences,
      },
      {
        text: 'fees and pricing',
        url: '',
        icon: Pricing,
      },
      {
        text: 'audit logs',
        url: '',
        icon: Audit,
      },
    ],
  },
]
