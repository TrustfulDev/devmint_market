import './alphabet.css'
import { bunny, alphabet_bg, speech_bubble } from '../../assets/images';

const Alphabet = () => {
    return (
        <section className="main-container">
            <div className="left-main-box">
                <div id="concept">*Concept</div>
                <img id="speech_bubble" src={speech_bubble} alt="" />
                <img id="bunny" src={bunny} alt="picture_of_bunny" />
            </div>

            <div className="right-main-box">
                <div className="bg_container">
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <img className="bg_img" src={alphabet_bg} alt="" />
                    <span></span>
                </div>
                <div className="letter" id="A0">a</div>
                <div className="letter" id="A1">â</div>
                <div className="letter" id="A2">ă</div>
                <div className="letter" id="A3">b</div>
                <div className="letter" id="A4">c</div>
                <div className="letter" id="A5">d</div>
                <div className="letter" id="A6">đ</div>
                <div className="letter" id="A7">e</div>
                <div className="letter" id="A8">ê</div>
                <div className="letter" id="A9">g</div>
                <div className="letter" id="A10">h</div>
                <div className="letter" id="A11">i</div>
                <div className="letter" id="A12">k</div>
                <div className="letter" id="A13">l</div>
                <div className="letter" id="A14">m</div>
                <div className="letter" id="A15">n</div>
                <div className="letter" id="A16">o</div>
                <div className="letter" id="A17">ô</div>
                <div className="letter" id="A18">ơ</div>
                <div className="letter" id="A19">p</div>
                <div className="letter" id="A20">q</div>
                <div className="letter" id="A21">r</div>
                <div className="letter" id="A22">s</div>
                <div className="letter" id="A23">t</div>
                <div className="letter" id="A24">u</div>
                <div className="letter" id="A25">ư</div>
                <div className="letter" id="A26">v</div>
                <div className="letter" id="A27">x</div>
                <div className="letter" id="A28">y</div>
            </div>
        </section>
    )
}

export default Alphabet;