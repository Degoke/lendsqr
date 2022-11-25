import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from '@reduxjs/toolkit'
import userReducer, {
  activateUser,
  blacklistUser,
} from './features/Users/userSlice'
import helperReducer from './features/helpers/helperSlice'

const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
  matcher: isAnyOf(activateUser, blacklistUser),
  effect: async (action, listenerApi) => {
    localStorage.setItem(
      'users',
      JSON.stringify((listenerApi.getState() as RootState).users.data.users)
    )
  },
})

const store = configureStore({
  reducer: {
    users: userReducer,
    helpers: helperReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
