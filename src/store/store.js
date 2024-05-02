import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import  folderSlice  from './foldersSlice'
import modalSlice from './modalSlice'

export const store = configureStore({
  reducer: {
    auth:authSlice,
    folders:folderSlice,
    modal:modalSlice
  },
})