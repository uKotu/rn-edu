import {UserData} from "./models/userData";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../store";

export interface AuthenticationState{
  isBeingAuthenticated:boolean;
  isAuthenticated: boolean;
  userData: UserData | null;
}

const initialState : AuthenticationState = {
  isBeingAuthenticated : false,
  isAuthenticated: false,
  userData:null
}

export const authenticationSlice = createSlice({
  name:'authentication',
  initialState, reducers:{
    setAuthenticatedStateOff: (state) =>{
      state.isAuthenticated = false;
    }
  }
});

export const selectAuthentication = (state:RootState) => state.authentication;
export const {setAuthenticatedStateOff} = authenticationSlice.actions;
export default authenticationSlice.reducer;