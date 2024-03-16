import './subjects.css';
import abgt from './imasub/agbt.webp';
import cpt from './imasub/cpt.webp'
import be from './imasub/be.png'
import thermo from './imasub/thermo.jpg'

const Subjects = () => {
  return (
    <div className="subject">
            <div className="subbar">
                <div className="subbar1">IIT Kharagpur</div>
                <div className="subbar2">Agricuiculture And Food Engneering </div>
                <div className="subbar3"> Welcome Adarsh</div>
            </div>
            <div className="subject1">
                <div className="subicon"><a href="/AGBT"><img src={abgt} alt="SUBJECTS" /><p>AGBT</p></a></div>
                <div className="subicon"><a href="/BE"><img src={be} alt="SUBJECTS" /><p>Basic Electronics</p></a></div>
                <div className="subicon"><a href="/THERMO"><img src={thermo} alt="SUBJECTS" /><p>Thermodynaics</p></a></div>
                <div className="subicon"><a href="/CPT"><img src={cpt} alt="SUBJECTS" /><p>CPT</p></a></div>
            </div>
        </div>
  );
};

export default Subjects;
