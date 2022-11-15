// Default imports
import './clusters.css';

// Import Images
import { clusterBg, tomatoBag, lettuceBag, carrotBag, tomatoBtn, lettuceBtn, carrotBtn } from '../../assets/images';
import { motion } from 'framer-motion';

const Clusters = () => {
    return (
        <motion.div className='cluster-container'
            style={{backgroundImage: `url(${clusterBg})`}}
        >
            
        </motion.div>
    )
}

export default Clusters;