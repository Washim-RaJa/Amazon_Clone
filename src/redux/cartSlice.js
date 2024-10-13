import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    productsNumber: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // Checking if the received product is in the array already
            const addProductExists = state.products.find(product => product.id === action.payload.id);
            if (addProductExists) {
                addProductExists.quantity += parseInt(action.payload.quantity);
            } else {
                state.products.push({...action.payload, quantity: parseInt(action.payload.quantity)})
            }
            state.productsNumber = state.productsNumber + parseInt(action.payload.quantity);
        },
        removeFromCart: (state, action) => {
            // Find the product from the array
            const productToRemove = state.products.find(product => product.id === action.payload);

            // Remove the quantity from product number
            state.productsNumber = state.productsNumber - productToRemove.quantity

            // Find index of the removing product
            const index = state.products.findIndex(product => product.id === action.payload)

            // Finally remove the product from the array 
            state.products.splice(index, 1);
        },
        quantityIncreement: (state, action) => {
            const productExists = state.products.find(product => product.id === action.payload);
            if (productExists && productExists.quantity > 0) {
                productExists.quantity++
                // productExists.quantity = parseInt(productExists.quantity) + 1
            }
            state.productsNumber++
        },
        quantityDecreement: (state, action) => {
            const productExists = state.products.find(product => product.id === action.payload);
            if (productExists && productExists.quantity > 1) {
                // productExists.quantity = parseInt(productExists.quantity) - 1
                productExists.quantity--
                state.productsNumber--  
            }
        },
    }
})

export const { addToCart, removeFromCart, quantityIncreement, quantityDecreement } = cartSlice.actions;
export default cartSlice.reducer;