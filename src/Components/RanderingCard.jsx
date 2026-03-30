import React, { } from 'react';
import './Css-/RanderingCart.css'
import { MdDone } from 'react-icons/md';
import Crad from './Crad';
import BuyingCart from './BuyingCart';
import { toast } from 'react-toastify';

const RanderingCard = ({ data, toggel, setToggel, selected, setSelected }) => {

    function Product() {
        setToggel("Product")
    }

    function Cart() {
        setToggel("Cart")
    }

    const handleRemove = (id) => {
        setSelected(prev =>
            prev.filter(item => item.id !== id)
        );
        toast.error("is remove successfully")
    };

    const handleClearCart = () => {
        setSelected([]); // empty array = সব delete
    };

    console.log(selected)
    return (
        <div>
            <section className="rander">
                <div className="rander-box-1">
                    <h1>Premium Digital Tools</h1>
                    <p>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
                    <div className="toggel-btn">
                        <button onClick={Product} className={toggel === 'Product' ? 'toggel-deafult' : "toggel"}>Product</button>
                        <button onClick={Cart} className={toggel === 'Cart' ? "toggel-deafult" : "toggel"}>Cart({selected.length})</button>
                    </div>
                </div>
                {
                    toggel === "Product" ?
                        <Crad
                            data={data}
                            selected={selected}
                            setSelected={setSelected}
                        ></Crad> :
                        <BuyingCart
                            selected={selected}
                            handleRemove={handleRemove}
                            handleClearCart={handleClearCart}
                        ></BuyingCart>
                }
            </section>
        </div>
    );
};

export default RanderingCard;