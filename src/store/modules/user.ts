import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Router from 'next/router';
import { api } from '../../services/api';

interface UserData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const signupUser = createAsyncThunk(
  'users/signupUser',
  async ({ name, email, password }: UserData, thunkAPI) => {
    try {
      const response = await api.post('users', {
        name,
        email,
        password
      });
      console.log('data', response.data);

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        return { ...response.data, nickname: name, email };
      }
      return thunkAPI.rejectWithValue(response.data);
    } catch (e) {
      console.log('Error', e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const loginUser = createAsyncThunk(
  'users/login',
  async ({ email, password }: LoginData, thunkAPI) => {
    try {
      const response = await api.post('sessions', {
        email,
        password
      });

      console.log('response', response.data);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        Router.push('/');
        return {
          email: response.data.user.email,
          nickname: response.data.user.nickname
        };
      }
      return thunkAPI.rejectWithValue(response.data);
    } catch (e) {
      console.log('Error', e);
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const slice = createSlice({
  name: 'user',
  initialState: {
    nickname: '',
    email: '',
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: ''
  },
  reducers: {
    clearState: state => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    }
  },
  extraReducers: builder => {
    builder.addCase(signupUser.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.email = payload.user.email;
      state.nickname = payload.nickname;
    });
    builder.addCase(signupUser.pending, state => {
      state.isFetching = true;
    });
    builder.addCase(signupUser.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.email = payload.email;
      state.nickname = payload.nickname;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    });
    builder.addCase(loginUser.pending, state => {
      state.isFetching = true;
    });
  }
});

export const { clearState } = slice.actions;
export default slice.reducer;
