import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    userInfo: null,
    orders: [],
  },
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.userInfo = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userInfo = null;
      state.orders = [];
    },
    setOrders(state, action) {
      state.orders = action.payload;
    },
  },
});

export const { loginSuccess, logout, setOrders } = userSlice.actions;
export default userSlice.reducer;
