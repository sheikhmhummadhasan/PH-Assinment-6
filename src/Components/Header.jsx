import { FaOpencart } from 'react-icons/fa';

const Header = () => {
    return (
        <div>
            <header>
                <nav className='nav'>
                    <div className='item-1'>
                        <h1 className="logo">
                            DigiTools
                        </h1>                    </div>
                    <div className="item-2">
                        <h3 className='text'>Products</h3>
                        <h3 className='text'>Features</h3>
                        <h3 className='text'>Pricing</h3>
                        <h3 className='text'>Testimonials</h3>
                        <h3 className='text'>FAQ</h3>
                    </div>
                    <div className="item-3">
                        <FaOpencart className='card'><span>0</span></FaOpencart>
                        <h3 className='text'>Login</h3>
                        <button className="prime-btn">Get Started</button>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;