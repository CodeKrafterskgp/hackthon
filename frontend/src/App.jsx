// import Leader from './components/leader-board/Leader';
// import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
import Footer from './components/footer/footer';
import Landing from './components/Landing/landing';


const App = () => {
  return (<Router>
    <div className="App">
      <div className="bg2">

        <Navbar />


        <Switch>


          <Route exact path="/">
            <Landing />
          </Route>



        </Switch>


        <Footer />
      </div>
    </div>
  </Router>
  );
};

export default App;
