import { Howl } from 'howler';

// Load Audio Assets
export { default as bgm } from '../../assets/audio/YummyFlavor.mp3';
export { default as crateSFX } from '../../assets/audio/crateSFX.wav';

export function playSound(src) {
    const sound = new Howl({
        src,
        html5: true,
        volume: 0.1,
    });
    sound.play();
}