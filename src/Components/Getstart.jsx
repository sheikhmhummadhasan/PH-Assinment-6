import React from 'react';
import { MdDone } from 'react-icons/md';
import './Css-/GetStart.css'

const Getstart = () => {
    return (
        <div>
            <section className="get-start margin">
                <div className="rander-box-1">
                    <h1>Get Started in 3 Steps</h1>
                    <p>Start using premium digital tools in minutes, not hours.</p>
                </div>
                
                <div className="started-cards">
                    <div className="started-cart">
                        <div className="end">
                            <span className='numb'>01</span>
                        </div>
                        <img src="/user.png" alt="" />
                        <h3>Create Account</h3>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className="started-cart">
                        <div className="end">
                            <span className='numb'>02</span>
                        </div>
                        <img src="/package.png" alt="" />
                        <h3>Choose Products</h3>
                        <p>Browse our catalog and select the toolsthat fit your needs.</p>
                    </div>
                    <div className="started-cart">
                        <div className="end">
                            <span className='numb'>03</span>
                        </div>
                        <img src="/rocket.png" alt="" />
                        <h3>Start Creating</h3>
                        <p>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Getstart;