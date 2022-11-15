// Default imports
import './home.css';
import { useEffect } from 'react';

// Import icons
import { TiSortAlphabeticallyOutline, TiVolumeUp, TiArrowMinimiseOutline, TiDocumentText } from 'react-icons/ti';

// Link for page routing
import { Link } from 'react-router-dom';

// Import Audio
import { playSound, bgm, crateSFX } from './homeAudio';
import ReactHowler from 'react-howler';

// Import Images
import { bg, market, crate, welcomeSign, bunny } from '../../assets/images';
import { motion, useAnimationControls } from 'framer-motion';

const Home = () => {
    // For routing with framer motion
    const MotionLink = motion(Link);

    // Animation Controllers
    const bunnyControls = useAnimationControls();
    const marketControls = useAnimationControls();

    // Bunny Frames
    const bunnyFrames = async () => {
        await bunnyControls.start({
            x: 0,
            y: 0,
            scale: 1,
            transition: { type: 'spring', duration: 0.9, delay: 1.2 },
        });

        bunnyControls.start({
            y: 5,
            transition: {
                ease: "easeInOut",
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse"
            }
        });
    }

    // Run Animations
    useEffect(() => {
        bunnyFrames();

        marketControls.start({
            y: 0, 
            transition: { type: 'spring', duration: 1, delay: 0.5 },
        });

        marketControls.start({
            scale: 1.0,
            rotate: 0,
            transition: { type: 'spring', delay: 0.9, duration: 0.7 },
        });
    }, []);

    return (
        <motion.div className='home-container' 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ backgroundImage: `url(${bg})`}}
        >
            <ReactHowler 
                src={bgm}
                volume={0.03}
                playing={true}
                loop={true}
            />

            <div className='home-left'>
                <motion.div className='home-sign' 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.2 }}
                    style={{ backgroundImage: `url(${welcomeSign})`}}>
                    <h1>Welcome to DevMint!</h1>
                    <p>Start learning Vietnamese with us on the market to the right --&gt;</p>
                </motion.div>

                <motion.div className='home-bunny' 
                    initial={{ x: -500, y: 1000, scale: 0.8 }}
                    animate={ bunnyControls }
                >
                    <img src={bunny} alt='Bunny Mascot' />
                </motion.div>
            </div>

            <motion.div className='home-right'
                initial={{ y: 1000, scale: 0.5, rotate: 5 }}
                animate={ marketControls }
            >
                <div className='home-market' style={{ backgroundImage: `url(${market})`}}>
                    <div className='home-crates'>
                        <MotionLink className='home-crate' 
                            whileHover={{ rotate: [0, 1, -1, 1, -1, 0], scale: 1.05, transition: { duration: 0.3 }}}
                            onHoverStart={() => playSound(crateSFX)}
                            style={{ backgroundImage: `url(${crate})`}}
                            to='/'
                        >
                            <h3 className='home-crate-header'>Alphabet List</h3>
                            <TiSortAlphabeticallyOutline className='home-crate-icon' />
                        </MotionLink>

                        <MotionLink className='home-crate' 
                            whileHover={{ rotate: [0, 1, -1, 1, -1, 0], scale: 1.05, transition: { duration: 0.3 }}}
                            onHoverStart={() => playSound(crateSFX)}
                            style={{ backgroundImage: `url(${crate})`}}
                            to='/clusters'
                        >
                            <h3 className='home-crate-header'>Clusters List</h3>
                            <TiArrowMinimiseOutline className='home-crate-icon' />
                        </MotionLink>

                        <MotionLink className='home-crate' 
                            whileHover={{ rotate: [0, 1, -1, 1, -1, 0], scale: 1.05, transition: { duration: 0.3 }}}
                            onHoverStart={() => playSound(crateSFX)}
                            style={{ backgroundImage: `url(${crate})`}}
                            to='/'
                        >
                            <h3 className='home-crate-header'>Tones List</h3>
                            <TiVolumeUp className='home-crate-icon' />
                        </MotionLink>

                        <MotionLink className='home-crate' 
                            whileHover={{ rotate: [0, 1, -1, 1, -1, 0], scale: 1.05, transition: { duration: 0.3 }}}
                            onHoverStart={() => playSound(crateSFX)}
                            style={{ backgroundImage: `url(${crate})`}}
                            to='/'
                        >
                            <h3 className='home-crate-header'>Vocab List</h3>
                            <TiDocumentText className='home-crate-icon' />
                        </MotionLink>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Home;