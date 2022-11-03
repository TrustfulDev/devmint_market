import './navbar.css';
import logo from '../../assets/devMint.png';
import { useState } from 'react';

// Link for page routing
import { Link } from 'react-router-dom';

// Framer Motion
import { motion } from 'framer-motion';

// Icons
import { TiHomeOutline, TiSortAlphabeticallyOutline, TiVolumeUp, TiArrowMinimiseOutline, TiDocumentText, TiArrowBack, TiArrowForward } from 'react-icons/ti';

// Reduce redundant code - Links
const Menu = () => (
    <>
        <Link to='/' className='nav-item'>
            <TiHomeOutline />
            Home
        </Link>
        <Link to='/alphabet' className='nav-item'>
            <TiSortAlphabeticallyOutline />
            Alphabet
        </Link>
        <Link to='/' className='nav-item'>
            <TiVolumeUp />
            Clusters
        </Link>
        <Link to='/' className='nav-item'>
            <TiArrowMinimiseOutline />
            Tones
        </Link>
        <Link to='/' className='nav-item'>
            <TiDocumentText />
            Vocab
        </Link>
    </>
);

const Navbar = () => {
    // Used to toggle the mobile menu
    const [toggleMenu, setToggleMenu] = useState(false);

    // Prevent menu animation on load
    const [isLoaded, setIsLoaded] = useState(false);
    setTimeout(() => {
        setIsLoaded(true);
    }, 1000);

    return (
        // Moves the navbar down from the top of screen - does a small bounce
        <motion.header className='nav-container'
            initial={{ y: -150 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        >
            {/* DevMint Logo */}
            <Link to='/' className='nav-logo'><img src={logo} alt='DevMint Logo' /></Link>

            {/* Desktop Navbar - 1101px or larger */}
            <nav className='nav-items'>
                <Menu />
            </nav>

            {/* Mobile Navbar - 1100px or smaller */}
            <motion.nav className='nav-menu'>
                {toggleMenu
                    ? <div onClick={() => setToggleMenu(false)}>
                        <TiArrowForward className='nav-menu-icon' />
                    </div>
                    : <div onClick={() => setToggleMenu(true)}>
                        <TiArrowBack className='nav-menu-icon' />
                    </div>
                }

                <div className={toggleMenu ? 'nav-menu-items' : (isLoaded) ? 'nav-menu-items nav-menu-close' : 'nav-menu-items nav-menu-close hidden'}>
                    <Menu />
                </div>
            </motion.nav>

        </motion.header>
    );
};

export default Navbar;