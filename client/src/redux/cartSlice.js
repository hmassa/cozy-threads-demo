import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            const id = action.payload.id;

            const isMatch = (element) => element.id === id;
            const index = state.items.findIndex(isMatch);

            if (index >= 0) {
                state.items.splice(index, 1);
            }
        }
    },
});

export const { addItem, removeItem } = cartSlice.actions;

export const selectCartCount = (state) => state.cart.items.length;
export const selectCartContents = (state) => state.cart.items;

export default cartSlice.reducer;
