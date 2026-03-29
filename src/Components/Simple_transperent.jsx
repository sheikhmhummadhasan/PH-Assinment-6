import React from 'react';
import { MdDone } from 'react-icons/md';

const Simple_transperent = () => {
    return (
        <div>
            <section className="rander margin">
                <div className="rander-box-1">
                    <h1>Simple, Transparent Pricing</h1>
                    <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                    <div className="toggel-btn">
                        <button className="toggel-deafult">Product</button>
                        <button className="toggel">Cart(2)</button>
                    </div>
                </div>
                <div className="rander-box-2">

                    {/* cards */}

                    <div className="cart">
                        
                        <h2>Book Name Heare</h2>
                        <p>Titel about of book what you have wright her eyther not</p>
                        <h2>$29<span id='month'>/mo</span></h2>
                        <p className='done'><MdDone className='i' /> somthing right</p>
                        <p className='done'><MdDone className='i' /> somthing right</p>
                        <p className='done'><MdDone className='i' /> somthing right</p>
                        <button className="buy-now">Buy Now</button>
                    </div>
                    <div className="cart gradent">
                       
                        <h2 className='color'>Book Name Heare</h2>
                        <p className='color'>Titel about of book what you have wright her eyther not</p>
                        <h2 className='color'>$29<span id='month'>/mo</span></h2>
                        <p className='done'><MdDone className='i' /> somthing right</p>
                        <p className='done'><MdDone className='i' /> somthing right</p>
                        <p className='done'><MdDone className='i' /> somthing right</p>
                        <button className="buy-now">Buy Now</button>
                    </div>
                    <div className="cart">
                        
                        <h2>Book Name Heare</h2>
                        <p>Titel about of book what you have wright her eyther not</p>
                        <h2>$29<span id='month'>/mo</span></h2>
                        <p className='done'><MdDone className='i' /> somthing right</p>
                        <p className='done'><MdDone className='i' /> somthing right</p>
                        <p className='done'><MdDone className='i' /> somthing right</p>
                        <button className="buy-now">Buy Now</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Simple_transperent;