import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsSlice from '../features/products/state/slice.js';

const appReducer = combineReducers({
    products: productsSlice,
});

const store = configureStore({
    reducer: appReducer
});

export default store;
