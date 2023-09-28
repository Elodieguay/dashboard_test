import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  email: string | null;
  password: string | null;
}

const initialState: UserState = {
  email: null,
  password: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;

      console.log('Email stocké dans le store :', action.payload.email);
      console.log('Mot de passe stocké dans le store :', action.payload.password);
    },
  },
});

console.log(userSlice);

export const { setUser } = userSlice.actions;

export const selectUser = createSelector( (state: { user: UserState }) => state.user, (user =>user))
console.log(selectUser);

export default userSlice.reducer;