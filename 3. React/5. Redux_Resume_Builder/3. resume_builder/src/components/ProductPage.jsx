import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import React from 'react';
import { connect } from "react-redux";
function ProductPage(props) {
    let id = props.match.params.id;
    let product = props.products.find((product) => {
        return product.id == id;
    })
    // console.log(product);
    return (
        <div style={{
            display: "flex", justifyContent: "space-evenly"
            , marginTop: "3rem"
        }}>
            <img src={product.image} alt="" style={{
                height: "65vh",
                objectFit: "contain"
            }} />
            <div className="product-Desc" style={{ width: "40%" }}>
                <h1>{product.title}</h1>
                <div className="product-desc__container"
                    style={{ paddingLeft: "0.6rem" }}
                >
                    <p>
                        <span style={{
                            color: "grey",
                            fontSize: "1.2rem"
                        }}
                        >M.R.P: </span>
                        <span style={{
                            color: "red",
                            fontSize: "1.2rem"
                        }}>
                            {product.price}
                        </span>
                    </p>
                    <h3>Description</h3>
                    <p>{product.description}</p>
                    <Button variant="contained"
                        onClick={() => { props.addToCart(product.id, 1) }}
                    >
                        <ShoppingCartIcon></ShoppingCartIcon>
                        <span style={{ marginLeft: "0.5rem" }}>
                            Add to cart
                        </span>
                    </Button>
                </div>

            </div>
        </div>
    )
}
function mapStateToProps(store) {
    return store.product;
}
const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id, count) => {
            return dispatch({ type: "add_to_cart", payload: { id, count } });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);