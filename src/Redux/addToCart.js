import { createSlice } from "@reduxjs/toolkit"


export const addToCartslice = createSlice({
    name : 'cart',
    initialState :{
        cart: []
    },
    reducers:{
        addNewItem :(state, action) =>{
            state.cart.push(action.payload)
        }
    }
})

export const {addNewItem} = addToCartslice.actions

export default addToCartslice.reducer
