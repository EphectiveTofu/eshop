import React from 'react';
import './checkoutproduct.css';


function Checkoutproduct() {
    return (

        <div className="checkout_Product">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="" className="checkout_ProductImage" />
            <div className="product_info">
                <p className="checkout_ProductTitle">
                    Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)
                </p>
                <p className="checkout_ProductPrice">
                    <small>$</small>
                    <strong>20</strong>
                </p>

                <div className="checkout_ProductRating">
                    ⭐⭐⭐⭐⭐
                </div>

                <button>Remove from basket</button>
            </div>
        </div>
    )
}

export default Checkoutproduct