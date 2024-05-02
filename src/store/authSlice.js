import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogged: false,
  wrongUserOrPass:false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLogged = true
    },
    logout: (state) => {
      Object.assign(state, initialState)
    },
    setWrongUserOrPass :(state,payload) =>{
      state.wrongUserOrPass =payload.payload
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { login, logout ,setWrongUserOrPass} = authSlice.actions

export default authSlice.reducer