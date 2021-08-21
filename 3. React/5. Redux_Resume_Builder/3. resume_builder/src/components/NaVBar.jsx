import React from 'react'
import { connect } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
function NaVBar(props) {
    return (
        <div className="parent" style={{
            display: 'flex', backgroundColor: "lightgray", justifyContent: 'space-between', position: "sticky"
            , padding: "0 1rem"
        }}>
            <div >
                <Link to="/" style={{ textDecoration: "none", fontSize: "1.2rem" }} >
                    <Button>
                        Redux Cart
                    </Button>
                </Link>
            </div>
            <Link to="/cart" style={{ textDecoration: "none", fontSize: "1.2rem",
        color:"#2f3542"
        }}>
                <Button color="inherit">
                    Cart
                    <ShoppingCartIcon style={{ marginLeft: '12%', marginRight: '20%' }} /><span className='cartNumber' style={{
                        position: "relative", top: "-15px",
                        left: "-30px"
                    }}>{props.quantity}</span>

                </Button>
            </Link>

        </div>
    )
}
const mapStatetoProps = (state) => {
    let quantity = 0;
    for (let i = 0; i < state.cart.length; i++) {
        quantity += state.cart[i].quantity;
    }
    return {
        quantity
    }
}
export default connect(mapStatetoProps)(NaVBar);