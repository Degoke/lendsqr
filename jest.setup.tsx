import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import store from './store'
jest.mock('next/router', () => require('next-router-mock'))

export const mockProvider = (ui: React.ReactElement): React.ReactElement => {
  return <Provider store={store}>{ui}</Provider>
}
