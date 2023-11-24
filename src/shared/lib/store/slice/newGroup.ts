import { IGroup } from '@/shared/interface/section';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IGroup[] = [];

export const newGroup = createSlice({
    name: 'createGroup',
    initialState,
    reducers: {
        createGroup: (state, action: PayloadAction<IGroup>) => {
            state.push(action.payload);
        },
    },
});

export const { createGroup } = newGroup.actions;
export default newGroup.reducer;
