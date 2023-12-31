import { createSlice } from '@reduxjs/toolkit';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import {
  getCurrentUserThunk,
  updateThemeThunk,
  updateUserThunk,
} from './userOperations';

const initialState = {
  user: { name: '', email: '', avatarURL: '' },
  theme: 'dark',
  firstRender: true,
};

const userInfoSlice = createSlice({
  name: '@@userInfo',
  initialState,
  reducers: {
    clearState: state => {
      state.user = { name: '', email: '', avatarURL: '' };
      state.theme = 'dark';
      state.firstRender = true;
    },
  },
  extraReducers: {
    [updateThemeThunk.pending]: (state, { payload }) => {
      state.loading = true;
      Loading.hourglass('We are validating your data...');
    },
    [updateThemeThunk.fulfilled]: (state, { payload }) => {
      state.theme = payload.theme;
      state.loading = false;
      Loading.remove();
    },
    [updateThemeThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      Loading.remove();
    },
    [updateUserThunk.pending]: (state, { payload }) => {
      state.loading = true;
      Loading.hourglass('We are validating your data...');
    },

    [updateUserThunk.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.loading = false;
      Loading.remove();
    },
    [updateUserThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      Loading.remove();
    },
    [getCurrentUserThunk.pending]: (state, { payload }) => {
      state.loading = true;
      Loading.hourglass('We are validating your data...');
    },

    [getCurrentUserThunk.fulfilled]: (state, { payload }) => {
      state.user = {
        name: payload.name,
        email: payload.email,
        avatarURL: payload.avatarURL,
        id: payload._id,
      };
      state.firstRender = false;
      state.theme = payload.theme;
      state.loading = false;
      Loading.remove();
    },
    [getCurrentUserThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      Loading.remove();
    },
  },
});

export const userInfoReducer = userInfoSlice.reducer;
export const { clearState } = userInfoSlice.actions;
