// Default imports
import './vocab.css';

// Import Audio
import ReactHowler from 'react-howler';
import { bgm } from './vocabAudio';

// Import Images
import { vocabBg } from '../../assets/images';
import { motion } from 'framer-motion';

const Vocab = () => {
    return(
        <motion.div className='vocab-container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{backgroundImage: `url(${vocabBg})`}}
        >
            <ReactHowler 
                src={bgm}
                volume={0.05}
                playing={true}
                loop={true}
            />

            <h1>Alphabet Page</h1>
            <h1>Clusters Page</h1>
            <h1>Tones Page</h1>
        </motion.div>
    );
};

export default Vocab;