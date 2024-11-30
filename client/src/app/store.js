import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsSlice from '../features/products/state/slice.js';
import cartSlice from '../features/user/state/slice.js';

const appReducer = combineReducers({
    products: productsSlice,
    cart: cartSlice,
});

const store = configureStore({
    reducer: appReducer
});

export default store;
