import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  folderNames: [],
  result:''
}

export const folderSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    setFolders: (state,action) => {
      state.folderNames = action.payload
    },
    setResult :(state,action)=>{
      state.result = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setFolders , setResult} = folderSlice.actions

export default folderSlice.reducer