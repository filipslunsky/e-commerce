import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsSlice from '../features/products/state/slice.js';
import cartSlice from '../features/cart/state/slice.js';
import userSlice from '../features/user/state/slice.js';

const appReducer = combineReducers({
    products: productsSlice,
    cart: cartSlice,
    user: userSlice,
});

const store = configureStore({
    reducer: appReducer
});

export default store;
