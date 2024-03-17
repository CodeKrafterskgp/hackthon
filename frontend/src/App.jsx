// import Leader from './components/leader-board/Leader';
import Login from './components/Login/Login';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Landing from './components/Landing/landing';
import Aboutus from './components/aboutus/aboutus';
import Subjects from './components/subjects/subjects';
import CPT from './components/chapters/CPT';
import BE from './components/chapters/BE';
import THERMO from './components/chapters/THERMO';
import AGBT from './components/chapters/ABGT';
import Leader from './components/leader-board/Leader';
import AGBT1 from './components/chapters/AGBT/AGBT1';
import THERMO1 from './components/chapters/THERMO/THERMO1';
import CPT1 from './components/chapters/CPT/CPT1';
import BE1 from './components/chapters/BE/BE1';
import AGBT2 from './components/chapters/AGBT/AGBT2';
import AGBT3 from './components/chapters/AGBT/AGBT3';
import AGBT4 from './components/chapters/AGBT/AGBT4';
import BE2 from './components/chapters/BE/BE2';
import BE3 from './components/chapters/BE/BE3';
import BE4 from './components/chapters/BE/BE4';

const App = () => {
  return (
    <Router>

      <div className="App">
        <div className="bg2">

          <Navbar />

          <Routes>
            <Route exact path="/" element={<Landing />}></Route>

            <Route exact path="/login" element={<Login />}></Route>
            
            <Route exact path="/aboutus" element={<Aboutus />}></Route>

            <Route exact path="/courses" element={<Subjects />}></Route>
            <Route exact path="/leader" element={<Leader/>}></Route>

            <Route exact path="/AGBT" element={<AGBT/>}></Route>
            <Route exact path="/THERMO" element={<THERMO/>}></Route>
            <Route exact path="/BE" element={<BE/>}></Route>
            <Route exact path="/CPT" element={<CPT/>}></Route>

            <Route exact path="/ACH1" element={<AGBT1/>}></Route>
            <Route exact path="/BCH1" element={<BE1/>}></Route>
            <Route exact path="/CCH1" element={<CPT1/>}></Route>
            <Route exact path="/TCH1" element={<THERMO1/>}></Route>

            <Route exact path="/ACH2" element={<AGBT2/>}></Route>
            <Route exact path="/BCH2" element={<BE2/>}></Route>
            
            <Route exact path="/ACH3" element={<AGBT3/>}></Route>
            <Route exact path="/BCH3" element={<BE3/>}></Route>

            <Route exact path="/ACH4" element={<AGBT4/>}></Route>
            <Route exact path="/BCH4" element={<BE4/>}></Route>
          </Routes>

          <Footer />

        </div>
      </div>

    </Router>
  );
};

export default App;
