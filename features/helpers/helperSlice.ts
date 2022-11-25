import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

interface HelperState {
  currentStatusMenu: string
}

const initialState: HelperState = {
  currentStatusMenu: '',
}

export const helperSlice = createSlice({
  name: 'helpers',
  initialState,
  reducers: {
    updateCurrentStatusMenu(state, action) {
      state.currentStatusMenu = action.payload
    },
  },
})

export default helperSlice.reducer

export const { updateCurrentStatusMenu } = helperSlice.actions

export const selectCurrentStatusMenu = (state: RootState) =>
  state.helpers.currentStatusMenu
