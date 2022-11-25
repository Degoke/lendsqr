import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { ChildProcessWithoutNullStreams } from 'child_process'
import StatusMenu from '../../components/StatusMenu'
import { RootState } from '../../store'
import { endpoints, urls } from '../../utils/constants/urls'
import { STATUS, Status } from '../../utils/types/status'
import { IUser, UserFilters } from '../../utils/types/user'

interface UserState {
  status: {
    users: Status
    userDetails: Status
  }
  data: {
    users: IUser[]
    userDetails: IUser | null
    userFilters: Record<UserFilters, string>
  }
}

const initialState: UserState = {
  status: {
    users: STATUS.IDLE,
    userDetails: STATUS.IDLE,
  },
  data: {
    users: [],
    userDetails: null,
    userFilters: {
      organization: '',
      email: '',
      username: '',
      date: '',
      status: '',
      phoneNumber: '',
    },
  },
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    activateUser(state, action) {
      const existingUser = state.data.users.find(
        (user) => user.id === action.payload
      )
      if (existingUser) {
        existingUser.status = 'active'
      }
      console.log(state)
    },
    blacklistUser(state, action) {
      const existingUser = state.data.users.find(
        (user) => user.id === action.payload
      )
      if (existingUser) {
        existingUser.status = 'blacklisted'
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status.users = STATUS.LOADING
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status.users = STATUS.SUCCESS
        state.data.users = action.payload
      })
      .addCase(getUsers.rejected, (state) => {
        state.status.users = STATUS.ERROR
      })
      .addCase(getUser.pending, (state) => {
        state.status.userDetails = STATUS.LOADING
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status.userDetails = STATUS.SUCCESS
        state.data.userDetails = action.payload
      })
      .addCase(getUser.rejected, (state) => {
        state.status.userDetails = STATUS.ERROR
      })
  },
})

export default userSlice.reducer

export const { activateUser, blacklistUser } = userSlice.actions

export const getUsers = createAsyncThunk('users/all', async (filters) => {
  try {
    let response
    const users = localStorage.getItem('users')
    if (!users) {
      response = await axios.get(endpoints.ALL_USERS_ENDPOINT)
      localStorage.setItem('users', JSON.stringify(response.data))
      return response.data
    }
    return JSON.parse(users)
  } catch (error) {
    throw error
  }
})

export const getUser = createAsyncThunk(
  'users/user',
  async (params: { id: string }) => {
    const { id } = params
    try {
      let users: IUser[]
      const response = localStorage.getItem('users')
      users = JSON.parse(response!)
      const user = users.find((user) => user.id == id)

      return user || null
    } catch (error) {
      throw error
    }
  }
)

export const selectUsers = (state: RootState, payload: any) => {
  let users = state.users.data.users
  const { numberPerPage, currentPage } = payload
  return users.slice(
    numberPerPage * (currentPage - 1),
    numberPerPage * currentPage
  )
}

export const selectTotalUsers = (state: RootState) =>
  state.users.data.users.length

export const selectActiveUsers = (state: RootState) =>
  state.users.data.users.filter((user) => user.status === 'active').length
export const selectUsersWithLoans = (state: RootState) =>
  state.users.data.users.filter((user) => !!user.education.loanRepayment).length

export const selectUser = (state: RootState) => state.users.data.userDetails

export const selectUserStatus = (state: RootState) => state.users.status.users
