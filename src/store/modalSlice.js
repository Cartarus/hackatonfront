import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: false,
}

export const modalSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    showModal: (state) => {
      state.show = true
    },
    hideModal: (state) => {
        state.show = false
      },
  },
})

// Action creators are generated for each case reducer function
export const { showModal, hideModal } = modalSlice.actions

export default modalSlice.reducer