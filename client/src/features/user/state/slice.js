import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@sample.com",
        editFirstName: false,
        editLastName: false,
        editEmail: false
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateFirstName: (state, action) => {
            state.user.firstName = action.payload.firstName;
        },
        updateLastName: (state, action) => {
            state.user.lastName = action.payload.lastName;
        },
        updateEmail: (state, action) => {
            state.user.email = action.payload.email;
        },
        toggleFirstName: (state) => {
            state.user.editFirstName = !state.user.editFirstName;
        },
        toggleLastName: (state) => {
            state.user.editLastName = !state.user.editLastName;
        },
        toggleEmail: (state) => {
            state.user.editEmail = !state.user.editEmail;
        },
    },
});

export const { updateFirstName, updateLastName, updateEmail, toggleFirstName, toggleLastName, toggleEmail } = userSlice.actions;
export default userSlice.reducer;
