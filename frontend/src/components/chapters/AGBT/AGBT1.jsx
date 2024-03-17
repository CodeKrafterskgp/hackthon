import yt from './img/youtube.png'
import chat from './img/chat.png'
import gpt from './img/gpt.png'
import vl from './img/vl.png'
import pyqs from './img/qa.png'
import syl from './img/exam.png'

const AGBT1 = () => {
    return (

        <div className="subject">
            <div className="subbar">
                <div className="subbar1">Agricultural And Food Engneering</div>
                <div className="subbar2">AGBT CH1 </div>
                <div className="subbar3"> Welcome Adarsh</div>
            </div>
            <div className="subject1">
                <div className="subicon"><a href="https://session.vedantu.com/trywhiteboard"><img src={vl} alt="SUBJECTS" /><p>White Board</p></a></div>
                
                <div className="subicon"><a href="https://www.youtube.com/"><img src={yt} alt="SUBJECTS" /><p>Refer Youtube</p></a></div>

                <div className="subicon"><a href="https://chat.openai.com/"><img src={gpt} alt="SUBJECTS" /><p>Refer Chat GPT </p></a></div>

                <div className="subicon"><a href="https://docs.google.com/document/d/1at92Lalf3uDUYa6-EUY4pcrjT9Gj3sigYaoJ3Ys7d:\Downloads\whiteboard\vl.png8DY/edit?addon_store"><img src={chat} alt="SUBJECTS" /><p>NOTES</p></a></div>

                <div className="subicon"><a href="https://docs.google.com/document/d/1i7vvxvbufybML95_1_x9PlqyeeTqKheA1NhmLDgzZb0/edit?addon_store"><img src={syl} alt="SUBJECTS" /><p>Syllabus</p></a></div>

                <div className="subicon"><a href="/CH4"><img src={pyqs} alt="SUBJECTS" /><p>PYQs</p></a></div>
                
            </div>
        </div>
      );
}
 
export default AGBT1;