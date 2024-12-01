import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const PRODUCTS_URL = `${import.meta.env.VITE_API_URL}/products`;

const initialState = {
    products: [],
    status: 'idle',
    error: null
};

const getProducts = createAsyncThunk('products/getProducts', async () => {
    try {
        const res = await fetch(PRODUCTS_URL);
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
});

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
          .addCase(getProducts.fulfilled, (state, action) => {
            state.status = 'success';
            state.products = action.payload;
          })
    }
});

export const { actions: productsActions } = productsSlice;
export { getProducts };
export default productsSlice.reducer;
