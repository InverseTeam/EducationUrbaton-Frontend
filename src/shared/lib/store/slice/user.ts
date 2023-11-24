import { IUser } from '@/shared/interface/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IUser = {} as IUser;

export const user = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        userData: (state, action: PayloadAction<IUser>) => {
            return action.payload;
        },
    },
});

export const { userData } = user.actions;
export default user.reducer;
