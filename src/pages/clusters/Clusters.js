// Default imports
import './clusters.css';
import { useState } from 'react';

// Import Audio
import { playSound, bgm, btnSFX, bagSFX, bagHover, bunnyHit } from './clusterAudio';
import ReactHowler from 'react-howler';

// Import Images
import { speechBubble, bunnyGlass, bunnyEek, clusterBg, tomatoBag, lettuceBag, carrotBag, tomatoBtn, lettuceBtn, carrotBtn } from '../../assets/images';
import { motion } from 'framer-motion';

// Import json file
import clusterData from '../../data/clusters.json';

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
        scale: 0.5
    },
    visible: {
        scale: 1,
    }
};

// Animation Variants for the bags
const bagContainer = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    },
};
const bagChild = {
    hidden: {
        y: 1000,
        scale: 0.1,
    },
    visible: {
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            mass: 0.3
        }
    },
};

const Clusters = () => {
    const [type, setType] = useState('consonant');
    const [expression, setExpression] = useState(bunnyGlass);

    function clickedBunny() {
        setExpression(bunnyEek);
        playSound(bunnyHit);
        setTimeout(() => {
            setExpression(bunnyGlass);
        }, 350);
    }

    return (
        <motion.div className='cluster-container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{backgroundImage: `url(${clusterBg})`}}
        >
            <ReactHowler
                src={bgm}
                volume={0.05}
                playing={true}
                loop={true}
            />
            <div className='cluster-left'>
                <motion.img src={speechBubble} alt='SpeechBubble' 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.1 }}
                />
                <motion.div className='speech-text'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.1 }}
                >
                    <h1>Time to learn Clusters!</h1>
                    <p>Click the buttons on the right to hear what it sounds like --&gt;</p>
                </motion.div>
                <motion.img src={expression} alt='Bunny Mascot' onClick={() => clickedBunny()}
                    initial={{ scale: 0.1, opacity: 0, rotate: 360 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0  }}
                    transition={{ delay: 1.4 }}
                />
            </div>

            <div className='cluster-right'>
                <motion.div className='cluster-btns'
                    variants={btnContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {clusterData.map((cluster, index) => {
                        let currBtn;
                        if (type === 'consonant') currBtn = tomatoBtn;
                        else if (type === 'double') currBtn = lettuceBtn;
                        else if (type === 'triple') currBtn = carrotBtn;

                        if (cluster.type === type){
                            return(
                                <motion.div key={index} className={`cluster-btn ${type}`}
                                    style={{ backgroundImage: `url(${currBtn})` }}
                                    variants={btnChild}
                                    onHoverStart={() => playSound(btnSFX)}
                                >
                                    <p>{cluster.combo}</p>
                                </motion.div>
                            )
                        }
                    })}
                </motion.div>

                <motion.div className='cluster-bags'
                    variants={bagContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className='cluster-bag' onClick={() => setType('consonant')}
                        variants={bagChild}
                        onHoverStart={() => playSound(bagHover)}
                        onTap={() => playSound(bagSFX)}
                    >
                        <h3 className='consonant-header'>Consonant Clusters</h3>
                        <img src={tomatoBag} alt='Tomato Bag' />
                    </motion.div>
                    <motion.div className="cluster-bag" onClick={() => setType('double')}
                        variants={bagChild}
                        onHoverStart={() => playSound(bagHover)}
                        onTap={() => playSound(bagSFX)}
                    >
                        <h3>Double Vowels</h3>
                        <img src={lettuceBag} alt='Lettuce Bag' />
                    </motion.div>
                    <motion.div className="cluster-bag" onClick={() => setType('triple')}
                        variants={bagChild}
                        onHoverStart={() => playSound(bagHover)}
                        onTap={() => playSound(bagSFX)}
                    >
                        <h3>Triple Vowels</h3>
                        <img src={carrotBag} alt='Carrot Bag' />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Clusters;