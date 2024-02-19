import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    token: null,
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state, action: { payload: string }) {
            state.token = action.payload;
            state.isAuthenticated = true;
        },
        logout(state) {
            state.token = null;
            state.isAuthenticated = false;
        },
    },
});

const selectIsAuthenticated = (state: RootState) => state.persistentAuth.isAuthenticated;

export { selectIsAuthenticated }

export const { setToken, logout } = authSlice.actions;

export default authSlice;