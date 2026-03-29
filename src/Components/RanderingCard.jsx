import React from 'react';
import './Css-/RanderingCart.css'
import { MdDone } from 'react-icons/md';

const RanderingCard = () => {
    return (
        <div>
            <section className="rander">
                <div className="rander-box-1">
                    <h1>Premium Digital Tools</h1>
                    <p>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
                    <div className="toggel-btn">
                        <button className="toggel-deafult">Product</button>
                        <button className="toggel">Cart(2)</button>
                    </div>
                </div>
                <div className="rander-box-2">

                    {/* cards */}

                    <div className="cart">
                        <div className="value">
                            <h4>Best Selling</h4>
                        </div>
                        <img src="/user.png" alt="" />
                        <h2>Book Name Heare</h2>
                        <p>Titel about of book what you have wright her eyther not</p>
                        <h2>$29<span id='month'>/mo</span></h2>
                        <p className='done'><MdDone className='i'/> somthing right</p>
                        <p className='done'><MdDone className='i' /> somthing right</p>
                        <p className='done'><MdDone className='i' /> somthing right</p>
                        <button className="buy-now">Buy Now</button>
                    </div>
                    <div className="cart">
                        <div className="value">
                            <h4>Best Selling</h4>
                        </div>
                        <img src="/user.png" alt="" />
                        <h2>Book Name Heare</h2>
                        <p>Titel about of book what you have wright her eyther not</p>
                        <h2>$29<span id='month'>/mo</span></h2>
                        <p className='done'><MdDone className='i'/> somthing right</p>
                        <p className='done'><MdDone className='i' /> somthing right</p>
                        <p className='done'><MdDone className='i' /> somthing right</p>
                        <button className="buy-now">Buy Now</button>
                    </div>
                    <div className="cart">
                        <div className="value">
                            <h4>Best Selling</h4>
                        </div>
                        <img src="/user.png" alt="" />
                        <h2>Book Name Heare</h2>
                        <p>Titel about of book what you have wright her eyther not</p>
                        <h2>$29<span id='month'>/mo</span></h2>
                        <p className='done'><MdDone className='i'/> somthing right</p>
                        <p className='done'><MdDone className='i' /> somthing right</p>
                        <p className='done'><MdDone className='i' /> somthing right</p>
                        <button className="buy-now">Buy Now</button>
                    </div>
                    <div className="cart">
                        <div className="value">
                            <h4>Best Selling</h4>
                        </div>
                        <img src="/user.png" alt="" />
                        <h2>Book Name Heare</h2>
                        <p>Titel about of book what you have wright her eyther not</p>
                        <h2>$29<span id='month'>/mo</span></h2>
                        <p className='done'><MdDone className='i'/> somthing right</p>
                        <p className='done'><MdDone className='i' /> somthing right</p>
                        <p className='done'><MdDone className='i' /> somthing right</p>
                        <button className="buy-now">Buy Now</button>
                    </div>
                    <div className="cart">
                        <div className="value">
                            <h4>Best Selling</h4>
                        </div>
                        <img src="/user.png" alt="" />
                        <h2>Book Name Heare</h2>
                        <p>Titel about of book what you have wright her eyther not</p>
                        <h2>$29<span id='month'>/mo</span></h2>
                        <p className='done'><MdDone className='i'/> somthing right</p>
                        <p className='done'><MdDone className='i' /> somthing right</p>
                        <p className='done'><MdDone className='i' /> somthing right</p>
                        <button className="buy-now">Buy Now</button>
                    </div>
                    <div className="cart">
                        <div className="value">
                            <h4>Best Selling</h4>
                        </div>
                        <img src="/user.png" alt="" />
                        <h2>Book Name Heare</h2>
                        <p>Titel about of book what you have wright her eyther not</p>
                        <h2>$29<span id='month'>/mo</span></h2>
                        <p className='done'><MdDone className='i'/> somthing right</p>
                        <p className='done'><MdDone className='i' /> somthing right</p>
                        <p className='done'><MdDone className='i' /> somthing right</p>
                        <button className="buy-now">Buy Now</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RanderingCard;