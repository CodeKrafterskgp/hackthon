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

import Chat from './components/chat/Chat';

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

            <Route exact path="/AGBT" element={<AGBT />}></Route>
            <Route exact path="/THERMO" element={<THERMO />}></Route>
            <Route exact path="/BE" element={<BE />}></Route>
            <Route exact path="/CPT" element={<CPT />}></Route>
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
