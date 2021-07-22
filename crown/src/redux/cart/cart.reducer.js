import { cartActionTypes } from './cart.types'
import { addItemToCart } from '../utils/cart.utils'

const INITIAL_STATE = {
    showCartBox: false,
    cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART:
            return { ...state, showCartBox: !state.showCartBox }
        case cartActionTypes.ADD_ITEM:
            return { ...state, cartItems: addItemToCart(state.cartItems, action.payload) }
        default:
            return state
    }
}

export default cartReducer;