import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { rateService } from '../../services/api';

export const fetchRates = createAsyncThunk(
  'rates/fetchRates',
  async () => {
    const data = await rateService.getRates();
    return data.map(item => ({
      timestamp: new Date(item.timestamp).toLocaleString(),
      rate: parseFloat(item.rate)
    }));
  }
);

const ratesSlice = createSlice({
  name: 'rates',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRates.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchRates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ratesSlice.reducer; 