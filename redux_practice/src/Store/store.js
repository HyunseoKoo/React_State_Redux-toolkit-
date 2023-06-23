// redux-toolkit 사용법 1
import {configureStore, createSlice} from '@reduxjs/toolkit';

let number = createSlice({
    name: 'number',
    initialState: 1,
    reducers: {
        changeNumber(state, action) {
            state = action.payload + 1;
        }
    }
});

export let {changeNumber} = number.actions;

export default configureStore({
    reducer: {
        first: number.reducer
    }
})