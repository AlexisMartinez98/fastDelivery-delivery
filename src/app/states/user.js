import { createAction, createReducer } from "@reduxjs/toolkit";


export const setUser = createAction("SET_USER");

const initialState = {
  email:null

};

export default createReducer(initialState, {
  [setUser]: (state, action) => {return{email:action.payload.id}}
 

});
