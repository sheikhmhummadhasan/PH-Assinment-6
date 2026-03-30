import { FaOpencart } from 'react-icons/fa';

const Header = ({ selected }) => {
    console.log(selected.length)
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
                        <div className="cart-icon">
                            <img src="/shopping-cart.png" alt="cart" height={30} />
                            <span className="cart-count">{selected.length}</span>
                        </div>
                        <button className="prime-btn">Get Started</button>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;