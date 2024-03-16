// import Leader from './components/leader-board/Leader';
import Login from './components/Login/Login';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Landing from './components/Landing/landing';
import Aboutus from './components/aboutus/aboutus';
import Subjects from './components/subjects/subjects';

const App = () => {
  return (
    <Router>

      <div className="App">
        <div className="bg2">

          <Navbar />

          <Routes>
            <Route exact path="/" element={<Landing />}></Route>

            <Route exact path="/login" element={<Login />}></Route>
            {/* /courses */}
            <Route exact path="/aboutus" element={<Aboutus />}></Route>

            <Route exact path="/courses" element={<Subjects />}></Route>


          </Routes>

          <Footer />

        </div>
      </div>

    </Router>
  );
};

export default App;
