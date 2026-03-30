import React from 'react';
import './Css-/selected.css'

const BuyingCart = ({ selected, handleRemove, handleClearCart }) => {
    console.log(selected)
    const total = selected.reduce(
        (sum, item) => sum + item.price,
        0
    );

    return (
        <div>

            {
                selected.length === 0 ? <section className="buying-cart">
                    <div className="buying">
                        <h1>No Cart's Selected</h1>
                        <p>Please Selecte A Cart</p>
                    </div>
                </section> : <section className="selected-card">
                    <h1>Your Cart</h1>
                    {
                        selected.map((elem) => {

                            return (
                                <div className="cat">
                                    <div className="titel">
                                        <img src={elem.image} alt="" />
                                        <div className="about">
                                            <h3>{elem.name}</h3>
                                            <p>${elem.price}</p>
                                        </div>
                                    </div>
                                    <h3 className='remove' onClick={() => handleRemove(elem.id)}>Remove</h3>
                                    {
                                        
                                    }
                                </div>
                            )
                        })
                    }
                    <div className="hisab">
                      <h2>Total : ${total}</h2> 
                    </div>
                    <div className="prime-btn" onClick={handleClearCart}>Proceed to Checkout</div>
                </section>
            }



        </div>
    );
};

export default BuyingCart;