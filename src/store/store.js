import { configureStore } from '@reduxjs/toolkit'
import UserInfoSlice from './slice/UserInfoSlice'

export const store = configureStore({
  reducer: { 
    userInfo:UserInfoSlice
  },
})
