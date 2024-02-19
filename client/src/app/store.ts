import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice, { AuthState } from '../features/auth/authSlice';
import shoppingApi from '../api/shoppingApi';

const persistConfig = {
    key: 'root',
    storage,
};

const persistentAuthReducer = persistReducer<AuthState>(persistConfig, authSlice.reducer);

const store = configureStore({
    reducer: combineReducers({
        persistentAuth: persistentAuthReducer,
        [shoppingApi.reducerPath]: shoppingApi.reducer,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
        .concat(shoppingApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

const persistor = persistStore(store)

export { store, persistor }