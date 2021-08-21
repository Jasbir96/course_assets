import React from 'react';
import "./cartPage.css";
import { connect } from "react-redux";
// import CartItem from './CartItem';
function Cart(props) {
    const { cart } = props;
    return (
        <>
            <div className="cart-parent" >
                <div className="cart_products-container">
                    <h2>Shopping Cart</h2>
                    {/* {cart.map((product) => {
                        return (
                            <CartItem product={product} ></CartItem>
                        )
                    })} */}
                </div>
                <div className="summary_container"
                    style={{ textAlign: "center" }}>
                    <h4>Cart Summary</h4>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    console.log(state);
    return state.cart;
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);