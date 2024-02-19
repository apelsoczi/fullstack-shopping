import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productApi from '../features/products/productApi';
import { useDispatch } from 'react-redux';
import authApi from '../features/auth/authApi';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice, { AuthState } from '../features/auth/authSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const persistentAuthReducer = persistReducer<AuthState>(persistConfig, authSlice.reducer);

const store = configureStore({
    reducer: combineReducers({
        persistentAuth: persistentAuthReducer,
        [authApi.reducerPath]: authApi.reducer,
        [productApi.reducerPath]: productApi.reducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
        .concat(authApi.middleware)
        .concat(productApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

const persistor = persistStore(store)

export { store, persistor }