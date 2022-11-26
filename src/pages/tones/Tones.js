// Default imports
import './tones.css';

// Import Audio
import ReactHowler from 'react-howler';
import { playSound, bgm } from './toneAudio';

// Import Images
import { bunnyGlass, speechBubble, toneBg, sacSymbol, huyenSymbol, hoiSymbol, ngaSymbol, nangSymbol, noSymbol } from '../../assets/images';
import { motion } from 'framer-motion';

// Animation Variants for the buttons
const btnContainer = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0,
            staggerChildren: 0.1
        }
    }
};

const btnChild = {
    hidden: {
        x: 1000,
    },
    visible: {
        x:0,
        transition: { type: 'spring', stiffness: 40 }
    }
};

const Tones = () => {
    return(
        <motion.div className='tone-container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ backgroundImage: `url(${toneBg})`}}
        >
            <ReactHowler 
                src={bgm}
                volume={0.05}
                playing={true}
                loop={true}
            />

            <div className='tone-left'>
                <motion.img src={ speechBubble } alt='Speech Bubble' 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.25 }}
                />
                <motion.div className='tone-text'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.25 }}
                >
                    <h1>Time to learn Tones!</h1>
                    <p>Feel free to start the test whenever you feel ready!</p>
                </motion.div>
                <motion.img src={ bunnyGlass } alt='Bunny Mascot' 
                    initial={{ y: 1000 }}
                    animate={{ y: [1000, 250, 250, 0] }}
                    transition={{ delay: 0.5 }}
                />
            </div>

            <motion.div className='tone-middle'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: [0.8, 1.1, 1] }}
                transition={{ delay: 1, duration: 0.3 }}
            >
                <h3>Oh yea baby</h3>
                <h1>la</h1>
                <p>A description here for the word above! Testing a super long description to make sure that everything will fit inside this jar! LALALALALALALLALA.</p>
            </motion.div>

            <div className='tone-right'>
                <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Click on the tone symbols below!</motion.h3>
                <motion.div className='symbolBtns'
                    variants={btnContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.img className='symbolBtn' src={sacSymbol} alt='Sac Symbol' variants={btnChild} />
                    <motion.img className='symbolBtn' src={huyenSymbol} alt='Huyen Symbol' variants={btnChild} />
                    <motion.img className='symbolBtn' src={hoiSymbol} alt='Hoi Symbol' variants={btnChild} />
                    <motion.img className='symbolBtn' src={ngaSymbol} alt='Nga Symbol' variants={btnChild} />
                    <motion.img className='symbolBtn' src={nangSymbol} alt='Nang Symbol' variants={btnChild} />
                    <motion.img className='symbolBtn' src={noSymbol} alt='No Symbol' variants={btnChild} />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Tones;