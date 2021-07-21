import { cartActionTypes } from './cart.types'

const INITIAL_STATE = {
    showCartBox: false
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART:
            return { ...state, showCartBox: !state.showCartBox }
        default:
            return state
    }
}

export default cartReducer;