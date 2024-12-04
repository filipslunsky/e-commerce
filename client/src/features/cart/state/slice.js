import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.amount += action.payload.amount;
            } else {
                state.cart.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    manufacturer: action.payload.manufacturer,
                    amount: action.payload.amount,
                    currentPrice: action.payload.currentPrice,
                    thumbnail: action.payload.thumbnail
                });
            }
        },
        addOnePiece: (state, action) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            existingItem.amount += 1;
        },
        removeOnePiece: (state, action) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                if (existingItem.amount > 1) {
                    existingItem.amount -= 1;
                } else {
                    state.cart = state.cart.filter(item => item.id !== action.payload.id);
                }
            }
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
    },
});

export const { addItem, removeItem, addOnePiece, removeOnePiece  } = cartSlice.actions;
export default cartSlice.reducer;
