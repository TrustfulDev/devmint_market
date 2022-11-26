import { Howl } from 'howler';

// Load Audio assets
export { default as bgm } from '../../assets/audio/CuteAvalanche.mp3';

export function playSound(src) {
    const sound = new Howl({
        src,
        html5: true,
        volume: 0.1,
    });
    sound.play();
}