import { render } from '@testing-library/react'
import Card from './index'
import { mockCard } from '../../__mocks__/dataMock'

it('renders Card component unchanged', () => {
  const { container } = render(
    <Card
      image={mockCard.image}
      text={mockCard.text}
      amount={mockCard.amount}
    />
  )
  expect(container).toMatchSnapshot()
})
