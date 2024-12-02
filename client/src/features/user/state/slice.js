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
    reducers: {},
});

export default userSlice.reducer;
