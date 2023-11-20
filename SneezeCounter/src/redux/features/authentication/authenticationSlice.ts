import {UserData} from './models/userData';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import {AuthenticationRequest} from './models/authenticationRequest';
import {api} from '../../../api/api';

export const loginAsync = createAsyncThunk(
  'auth/login',
  async (request: AuthenticationRequest) => {
    try {
      const response = await api.post('/login', request);
      return response.data;
    } catch (error) {
      //throw error;
    }
    const response: UserData = {username: 'markec', dateJoined: '20.11.2023'};
    return response;
  },
);

export interface AuthenticationState {
  isBeingAuthenticated: boolean;
  isAuthenticated: boolean;
  userData: UserData | null;
}

const initialState: AuthenticationState = {
  isBeingAuthenticated: false,
  isAuthenticated: false,
  userData: null,
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setAuthenticatedStateOff: state => {
      state.isAuthenticated = false;
      state.userData = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginAsync.pending, state => {
        state.isBeingAuthenticated = true;
      })
      .addCase(loginAsync.rejected, state => {
        state.isBeingAuthenticated = false;
      })
      .addCase(
        loginAsync.fulfilled,
        (state, action: PayloadAction<UserData>) => {
          state.isBeingAuthenticated = false;
          state.isAuthenticated = true;
          state.userData = action.payload;
        },
      );
  },
});

export const selectAuthentication = (state: RootState) => state.authentication;
export const {setAuthenticatedStateOff} = authenticationSlice.actions;
export default authenticationSlice.reducer;
