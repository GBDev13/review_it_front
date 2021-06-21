import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Router from 'next/router';
import { destroyCookie, setCookie } from 'nookies';
import { toast } from 'react-toastify';
import { api } from '../../services/api';
import { IUser } from '../types';

interface UserData {
  nickname: string;
  email: string;
  is_expert: boolean;
  picture_url?: string | null;
  github_url?: string | null;
  linkedin_url?: string | null;
  password: string;
  technologies?: String[];
}

interface LoginData {
  email: string;
  password: string;
}

export const signupUser = createAsyncThunk(
  'users/signupUser',
  async (
    {
      nickname,
      email,
      is_expert,
      picture_url,
      github_url,
      linkedin_url,
      password,
      technologies
    }: UserData,
    thunkAPI
  ) => {
    const params = is_expert
      ? {
          nickname,
          email,
          is_expert,
          picture_url,
          password,
          github_url,
          linkedin_url,
          technologies
        }
      : {
          nickname,
          email,
          is_expert,
          picture_url,
          github_url,
          linkedin_url,
          password
        };

    const response = await api.post('users', params);

    if (response.status !== 201) {
      return thunkAPI.rejectWithValue(response);
    }

    setCookie(undefined, 'reviewit.token', response.data.token, {
      maxAge: 60 * 60 * 24 * 2, // 2 dias
      path: '/'
    });
    Router.push('/');

    return { ...response.data };
  }
);

export const loginUser = createAsyncThunk(
  'users/login',
  async ({ email, password }: LoginData, thunkAPI) => {
    const response = await api.post('sessions', {
      email,
      password
    });
    if (response.status !== 200) {
      return thunkAPI.rejectWithValue(response);
    }
    setCookie(undefined, 'reviewit.token', response.data.token, {
      maxAge: 60 * 60 * 24 * 2, // 2 dias
      path: '/'
    });
    Router.push('/');

    return { ...response.data };
  }
);

const initialState: IUser = {
  id: null,
  nickname: '',
  email: '',
  is_expert: null,
  picture_url: '',
  github_url: '',
  linkedin_url: '',
  score: 0,
  isFetching: false,
  isSuccess: false,
  isError: false
};

export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearState: state => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
    signOut: state => {
      destroyCookie(undefined, 'reviewit.token', {
        path: '/'
      });
      state.id = null;
      state.nickname = '';
      state.email = '';
      state.is_expert = null;
      state.picture_url = '';

      Router.push('/login');
    }
  },
  extraReducers: builder => {
    builder.addCase(signupUser.pending, state => {
      state.isFetching = true;
    });
    builder.addCase(signupUser.rejected, state => {
      state.isFetching = false;
      state.isError = true;

      toast.error(
        'Ocorreu um erro ao criar a conta 😢. Por favor, tente novamente!'
      );
    });
    builder.addCase(signupUser.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.email = payload.user.email;
      state.nickname = payload.user.nickname;
      state.is_expert = payload.user.is_expert;
      state.picture_url = payload.user.picture_url;
      state.id = payload.user.id;
      state.github_url = payload.user.github_url;
      state.linkedin_url = payload.user.linkedin_url;
      state.score = payload.user.score;

      toast.success(
        `Sua conta foi criada com sucesso! Bem-vindo(a) ${payload.user.nickname} 😁`
      );
    });
    builder.addCase(loginUser.pending, state => {
      state.isFetching = true;
    });
    builder.addCase(loginUser.rejected, state => {
      state.isFetching = false;
      state.isError = true;

      toast.error('Os dados informados estão incorretos.');
    });

    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.email = payload.user.email;
      state.nickname = payload.user.nickname;
      state.is_expert = payload.user.is_expert;
      state.picture_url = payload.user.picture_url;
      state.id = payload.user.id;
      state.github_url = payload.user.github_url;
      state.linkedin_url = payload.user.linkedin_url;
      state.score = payload.user.score;
      state.isFetching = false;
      state.isSuccess = true;
      api.defaults.headers.Authorization = `Bearer ${payload.token}`;

      toast.success(`Você entrou! Bem-vindo(a) de volta ${state.nickname} 😁`);
      return state;
    });
  }
});

export const { clearState, signOut } = slice.actions;
export default slice.reducer;
