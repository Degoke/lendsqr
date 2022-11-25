import UsersIcon from '../public/images/users_card_icon.svg'

export const mockCard = {
  image: UsersIcon,
  text: 'Users',
  amount: 100,
}

export const mockImage = UsersIcon

export const MockComponent = () => (
  <div data-testid="mockComponent">Hello World</div>
)

export const mockList = {
  title: 'settings',
  items: [
    {
      text: 'preferences',
      url: '',
      icon: UsersIcon,
    },
    {
      text: 'fees and pricing',
      url: '',
      icon: UsersIcon,
    },
    {
      text: 'audit logs',
      url: '',
      icon: UsersIcon,
    },
  ],
}
