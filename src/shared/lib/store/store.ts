import { authApi } from '@/features/authForm/api';
import { sectionApi } from '@/features/section/api/sectionApi';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducers = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    [sectionApi.reducerPath]: sectionApi.reducer,
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware).concat(sectionApi.middleware),
});
