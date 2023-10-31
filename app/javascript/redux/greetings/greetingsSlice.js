import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiEndpoint = '/api/v1/greetings/random';

export const getRandomGreeting = createAsyncThunk(
  'greetings/getRandomGreeting',
  async (thunkAPI) => {
    try {
      const response = await axios.get(apiEndpoint);
      return response.data.content;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  greeting: '', // Store the greeting as a string
  isLoading: false,
  error: null
};

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomGreeting.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRandomGreeting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.greeting = action.payload; // Update the greeting message
      })
      .addCase(getRandomGreeting.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export default greetingsSlice.reducer;
