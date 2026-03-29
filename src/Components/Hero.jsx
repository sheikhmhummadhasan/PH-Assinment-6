import React from 'react';
import './Css-/Hero.css'

const Hero = () => {
    return (
        <div>
            <section className='hero'>
                <div className="h-box-1">
                    <div className="tools">
                        <span className='dot'></span>
                        <p>New: AI-Powered Tools Available</p>
                    </div>
                    <h1 className='tool-h'>Supercharge Your Digital Workflow</h1>
                    <p id='tool-p'>Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.Explore Products</p>
                        <div className="hero-btns">
                            <button className="heros-btn">Explore Products</button>
                            <div className="hero-btn"> <img src="/Play.png" alt="" /> <p className="watch">Watch Demo</p></div>
                        </div>
                </div>
                <div className="h-box-2">
                    <img src="/banner.png" alt="" />
                </div>
            </section>
        </div>
    );
};

export default Hero;