export const getAllCarts = () => ({
   type: "GET_ALL_CARTS"
})

export const fatchCarts = () => ({
   type: "FATCH_CARTS"
})

export const getCart = () => ({
   type: "GET_CART"
})

export const createCart = (cart) => ({
   type: "CREATE_CART",
   payload: cart,
})

export const updateCart = (cart) => ({
    type: "UPDATE_CART",
    payload: cart
})

export const deleteCart = (id) => ({
    type: "DELETE_CART",
    payload: id
})
