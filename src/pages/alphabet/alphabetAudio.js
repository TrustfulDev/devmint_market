import { Howl } from 'howler';

// Load Audio assets
export { default as bgm } from '../../assets/audio/Children.mp3';
export { default as btnSFX } from '../../assets/audio/clusterBtnSFX.mp3';
export { default as bagSFX } from '../../assets/audio/bagSFX.wav';
export { default as bagHover } from '../../assets/audio/bagHover.ogg';
export { default as bunnyHit } from '../../assets/audio/bunnyHit.wav';

export function playSound(src, vol) {
    const sound = new Howl({
        src,
        html5: true,
        volume: vol,
    });
    sound.play();
}