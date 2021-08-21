import { products } from "../../data/db";
let initialState = {
    products,
    cart: [],
}
function ShoppingReducer(state = initialState, action) {
    console.log(state);
    switch (action.type) {
        // generic add  /update
        case "add_to_cart":
            //   get the product detail from products 
            let desiredproduct = state.products.find((product) => {
                return product.id == action.payload.id
            })
            // check if it already exist in cart 
            let isPresent = state.cart.find((product) => {
                return product.id == action.payload.id
            })
            let cart = []
            if (isPresent) {
                cart = state.cart.map((product) => {
                    return product.id == action.payload.id ? { ...product, quantity:  action.payload.count } : product
                });
            } else {
                cart = [...state.cart, { ...desiredproduct, quantity: 1 }]
            }
            //  if exist increase quantity 
            // else put quantity 
            console.log(cart)
            return {
                ...state,
                cart
            }
        // cart remove -> delete 
        case "remove_from_cart":
            // remove it from carts array
            let newCart = state.cart.filter((product) => {
                return product.id != action.payload.id
            })
            return {
                ...state,
                cart: newCart
            }
        default:
            return state;
    }
}
export default ShoppingReducer;