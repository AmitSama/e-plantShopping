import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // state stored in "items" array, 
    // new data in "action.payload"
    addItem: (state, action) => {
        const {name, image, cost } = action.payload;
        const existingItem = state.items.find((item) => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            state.items.push({name, image, cost, quantity : 1});
        }
        //items.push({...items, plant : state});
    },
    removeItem: (state, action) => {
        state.items = state.items.filter((item) => item.name !== action.payload.name);
    },

    updateQuantity: (state, action) => {
        const {name, cost } = action.payload;
        const foundItem = state.items.find((item) => item.name === name);
        if (foundItem) {
            foundItem.quantity = action.payload.quantity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
