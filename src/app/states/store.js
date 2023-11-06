import { configureStore } from "@reduxjs/toolkit";
//import userReducer from "./user";
import userSlice from "./user"

const store = configureStore({
    reducer: {
    
      user: userSlice
    
    },
  });
  
  export default store;