import { createSlice, configureStore } from "@reduxjs/toolkit";
import { cartItemType } from "../Types";
interface CartStateType {
    cartItems: cartItemType[];
}

const initialState: CartStateType = { cartItems: [] };

const arraySlice = createSlice({
    name: "array",
    initialState: initialState,
    reducers: {
        addItem(state, action) {
            state.cartItems.push(action.payload);
        },
        removeItem(state, action) {
            state.cartItems = state.cartItems.filter(
                (item) => item.restoName !== action.payload
            );
        },
        resetCartArray(state) {
            state.cartItems = [];
        },
    },
});
const store = configureStore({ reducer: arraySlice.reducer });
export const arrayAction = arraySlice.actions;
export default store;
