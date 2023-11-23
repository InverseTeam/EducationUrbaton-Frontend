import { authApi } from '@/features/authForm/api';
import { MiddlewareArray, combineReducers, configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});
