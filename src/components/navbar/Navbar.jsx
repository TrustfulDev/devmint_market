import './navbar.css';
import logo from '../../assets/devMint.png';

// Link for page routing
import { Link } from 'react-router-dom';

// Framer Motion
import { motion } from 'framer-motion';

// Icons
import { AiOutlineHome, AiOutlineSound, AiOutlineComment, AiOutlineUsergroupDelete } from 'react-icons/ai';

const Navbar = () => {
    return (
        <motion.header className='nav-container'
            initial={{ y: -150 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        >
            <Link to='/' className='nav-logo'><img src={logo} alt='DevMint Logo' /></Link>

            <nav className='nav-items'>
                <Link to='/' className='nav-item'>
                    Home
                    <AiOutlineHome />
                </Link>
                <Link to='/' className='nav-item'>
                    Page1
                    <AiOutlineSound />
                </Link>
                <Link to='/' className='nav-item'>
                    Page2
                    <AiOutlineComment />
                </Link>
                <Link to='/' className='nav-item'>
                    Page3
                    <AiOutlineUsergroupDelete />
                </Link>
            </nav>
        </motion.header>
    );
};

export default Navbar;