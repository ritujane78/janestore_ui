import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";


const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})
store.subscribe(() => {
    try {
        const cart = store.getState().cart;
        localStorage.setItem("cart", JSON.stringify(cart))
    } catch (error){
        console.error("Failed to save state in local storage", error)
    }
})

export default store;