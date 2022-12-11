// Default imports
import './alphabet.css';

// Import Audio
import ReactHowler from 'react-howler';
import { bgm, btnSFX, playSound } from './alphabetAudio';

// Import Images
import { garden_bg_shadow, bunny, alphabet_bg, speech_bubble, alphabetGame } from '../../assets/images';
import { motion } from 'framer-motion';

// Import json file
import alphabetData from '../../data/alphabet.json';

const Alphabet = () => {

    return (
        <motion.section className="main-container"
            style={{ backgroundImage: `url(${garden_bg_shadow})`}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <ReactHowler
                src={ bgm }
                volume={0.02}
                playing={true}
                loop={true}
            />

            <div className="left-main-box">
                <motion.div className="speech_container">
                    <motion.img className="speech_bubble" src={speech_bubble} alt="" />
                    <motion.div className="concept-text">
                        <motion.h1>Time to learn Alphabets!</motion.h1>
                        <motion.p>Click the buttons on the right to hear what it sounds like --&gt;</motion.p>
                    </motion.div>
                </motion.div>
                <div className="bunny_container">
                    <motion.img className="bunny" src={bunny} alt="picture_of_bunny" 
                        intial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 1.1 }}
                    />

                    {/* <motion.div className="start-game-container"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.1 }}
                    >
                        <img className="start_btn" src={alphabetGame} alt="Start Game" />
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>START GAME</motion.p>
                    </motion.div> */}
                </div>
            </div>

            <div className="right-main-box">
                {alphabetData.map((currLetter, index) => {
                    return (
                        <motion.div className='letter-container' 
                            style={{ backgroundImage: `url(${alphabet_bg})` }} 
                            key={index}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.55 }}
                            onHoverStart={() => playSound(btnSFX, 0.08)}
                            onClick={ () => playSound(require(`../../assets/audio/AlphabetAudio/${currLetter.audio}.wav`), 1) }
                        >
                            <p className='letter'>{currLetter.letter}</p>
                        </motion.div>
                    );
                })}
            </div>
        </motion.section>
    )
}

export default Alphabet;