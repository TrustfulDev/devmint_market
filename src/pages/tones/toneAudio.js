import { Howl } from 'howler';

// Load Audio assets
export { default as bgm } from '../../assets/audio/SugarCookie.mp3';
export { default as btnSFX } from '../../assets/audio/clusterBtnSFX.mp3';

export function playSound(src, vol) {
    const sound = new Howl({
        src,
        html5: true,
        volume: vol,
    });
    sound.play();
}