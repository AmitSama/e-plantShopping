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
        const {name, quantity } = action.payload;
        const foundItem = state.items.find((item) => item.name === name);
        if (foundItem) {
            foundItem.quantity = action.payload.quantity;
        }
    },
	
	totalCartItems: (state) => {
		let allItems = 0;
		state.items.forEach((item) => allItems += item.quantity);
		return allItems;
	},
		
  },
});

export const { addItem, removeItem, updateQuantity, totalCartItems } = CartSlice.actions;

export default CartSlice.reducer;
