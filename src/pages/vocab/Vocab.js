// Default imports
import './vocab.css';

// Import Audio
import ReactHowler from 'react-howler';
import { playSound, bgm } from './vocabAudio';

// Import Images
import { vocabBg } from '../../assets/images';
import { motion } from 'framer-motion';

// Import icon
import { AiFillPlayCircle } from 'react-icons/ai';

// Import json file
import alphabetData from '../../data/alphabet.json';
import clusterData from '../../data/clusters.json';
import toneData from '../../data/tones.json';

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
            <div className='vocab-lists'>
                <h1>Alphabet Page</h1>
                <table>
                    <tr>
                        <th>Letter</th>
                        <th>Viet Example</th>
                        <th>English Example</th>
                    </tr>
                    {alphabetData.map((alphabet, index) => {
                        return(
                            <tr key={index}>
                                <th className='audioCol'>
                                    {alphabet.letter} 
                                    <AiFillPlayCircle 
                                        className='playIcon'
                                        onClick={() => playSound(require(`../../assets/audio/AlphabetAudio/${alphabet.audio}.wav`))}
                                    />
                                </th>
                                <th>{alphabet.vietEx}</th>
                                <th>{alphabet.engEx}</th>
                            </tr>
                        )
                    })}
                </table>
                <h1>Clusters Page</h1>
                <table>
                    <tr>
                        <th>Combo</th>
                        <th>Viet Example</th>
                        <th>English Example</th>
                        <th>Type</th>
                    </tr>
                    {clusterData.map((cluster, index) => {
                        return(
                            <tr key={index}>
                                <th className='audioCol'>
                                    {cluster.combo} 
                                    <AiFillPlayCircle 
                                        className='playIcon'
                                        onClick={() => playSound(require(`../../assets/audio/ClusterAudio/${cluster.audio}.wav`))}
                                    />
                                </th>
                                <th>{cluster.vietEx}</th>
                                <th>{cluster.engEx}</th>
                                <th>{cluster.type}</th>
                            </tr>
                        )
                    })}
                </table>
                <h1>Tones Page</h1>
                <table>
                    <tr>
                        <th>Symbol Name</th>
                        <th>Symbol</th>
                        <th>Explanation</th>
                        <th>Viet Example</th>
                        <th>English Translation</th>
                    </tr>
                    {toneData.map((tone, index) => {
                        return(
                            <tr key={index}>
                                <th>{tone.tonesymbolname} </th>
                                <th>{tone.symbol}</th>
                                <th>{tone.explanation}</th>
                                <th className='audioCol'>
                                    {tone.vietEx}
                                    <AiFillPlayCircle 
                                        className='playIcon'
                                        onClick={() => playSound(require(`../../assets/audio/ToneAudio/${tone.audio}.wav`))}
                                    />
                                </th>
                                <th>{tone.engEx}</th>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </motion.div>
    );
};

export default Vocab;