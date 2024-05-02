import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  folderNames: [],
}

export const folderSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    setFolders: (state,action) => {
      state.folderNames = action.payload
    } 
  },
})

// Action creators are generated for each case reducer function
export const { setFolders } = folderSlice.actions

export default folderSlice.reducer