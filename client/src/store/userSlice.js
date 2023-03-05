import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'appUser',
    initialState: {
        user: null, // default value
    },
    reducers: {

        setUser(state, action){
            state.user = {
                id: action.payload._id,
                name: action.payload.name,
                email: action.payload.email,
                role: action.payload.role,
            }
        },
        deleteUser(state, action){
            state.user = null;
        }
    },
});

export const {setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;