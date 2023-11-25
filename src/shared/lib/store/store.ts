import { authApi } from '@/features/authForm/api';
import { sectionApi } from '@/features/section/api/sectionApi';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import newGroupReducer from './slice/newGroup';
import userReducer from './slice/user';
const reducers = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    [sectionApi.reducerPath]: sectionApi.reducer,
    newGroupReducer,
    userReducer,
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware).concat(sectionApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
