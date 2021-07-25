export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)
    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === existingCartItem.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const decreseItem = (cartItems, cartItemToDecrese) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToDecrese.id)

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== cartItemToDecrese.id)
    }

    return cartItems.map(item => item.id === cartItemToDecrese.id ? { ...item, quantity: item.quantity - 1 } : item)
}