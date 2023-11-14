import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  email: string | null;
  id: string | null;
  is_admin: Boolean | null;

}

const initialState: UserState = {
  email: null,
  id: null,
  is_admin:null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      /*if (action.payload === null) {
        localStorage.removeItem('token');
      } else {
        if (action.payload.token) {
          localStorage.setItem('token', action.payload.token);
        }
      }*/
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
