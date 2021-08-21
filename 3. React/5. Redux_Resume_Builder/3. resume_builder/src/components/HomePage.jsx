import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
function HomePage(props) {
    let { products, addToCart } = props;
    return (
        <div style={{ display: "flex" }}>
            {products.map(product => {
                return (
                    <div key={product.id}>
                        <img src={product.image} style={{ height: "20vw" }} />
                        <h2>{product.title}</h2>
                        <div>{product.description}</div>
                        <h3>{product.price}</h3>
                        <Button size="small" color="primary">
                            <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
                                View Item
                            </Link>
                        </Button>
                        <Button size="small" color="primary" onClick={() => { addToCart(product.id, 1) }}>
                            Add to Cart
                        </Button>
                    </div>
                )
            })}
        </div>
    )
}
// higher order function
const HigherOrderComponent =
    connect(mapStateToProps, mapDispatchToProps)(HomePage)
export default HigherOrderComponent;