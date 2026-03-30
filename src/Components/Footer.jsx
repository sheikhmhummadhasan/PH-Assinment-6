import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import './Css-/Footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="f-1">
                    <div className="f-box-1">
                        <h1>DigiTools</h1>
                        <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className="f-box-2">
                        <h1>Product</h1>
                        <h3>Features</h3>
                        <h3>Pricing</h3>
                        <h3>Templates</h3>
                        <h3>Integrations</h3>
                    </div>
                    <div className="f-box-3">
                        <h1>Company</h1>
                        <h3>About</h3>
                        <h3>Carrer</h3>
                        <h3>Blog</h3>
                        <h3>Press</h3>
                    </div>
                    <div className="f-box-4">
                        <h1>Resources</h1>
                        <h3>Documentation</h3>
                        <h3>Help Center</h3>
                        <h3>Comunaction</h3>
                        <h3>Contact</h3>
                    </div>
                    <div className="f-box-5">
                        <h1>Sochal Links</h1>
                        <div className="icon">
                            <FaFacebookSquare className='f'/>
                            <FaInstagramSquare className='f'/>
                            <IoLogoYoutube className='f'/>
                        </div>
                    </div>
                </div>
                <div className="f-2">
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <p>Privacy Policy           Terms of Service           Cookies</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;