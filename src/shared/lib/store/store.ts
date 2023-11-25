import { authApi } from '@/features/authForm/api';
import { sectionApi } from '@/features/section/api/sectionApi';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import newGroupReducer from './slice/newGroup';
import userReducer from './slice/user';
import { newsApi } from '@/features/news/api';
import { flowsApi } from '@/features/flows/api/flowsApi';
const reducers = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    [sectionApi.reducerPath]: sectionApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [flowsApi.reducerPath]: flowsApi.reducer,
    newGroupReducer,
    userReducer,
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(sectionApi.middleware)
            .concat(newsApi.middleware)
            .concat(flowsApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
