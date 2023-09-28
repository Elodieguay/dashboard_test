import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice';

const Store = configureStore({
  reducer: {
    user: userReducer,
    // ...other reducers
  },
});

export default Store;
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;