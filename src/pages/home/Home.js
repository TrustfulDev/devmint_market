import './home.css';
import ReactHowler from 'react-howler';

import { motion } from 'framer-motion';

// Import Assets
import bgm from '../../assets/audio/YummyFlavor.mp3';
import bg from '../../assets/images/background.png';

const Home = () => {
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
                {/* <p>Welcome to DevMint! Start learning Vietnamese with us on the market to the right.</p> */}
            </div>
            <div className='home-right'>

            </div>
        </motion.div>
    )
}

export default Home;