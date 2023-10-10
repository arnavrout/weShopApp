import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        //add is to add items to the cart
        add(state, action) {
            state.push(action.payload)
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload)
        }
    }
});

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;