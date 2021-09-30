import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Employee from './components/Employee/Employee';
import SingleEmployee from './components/SingleEmployee/SingleEmployee';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div >
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/employee'>
            <Employee />
          </Route>
          <Route exact path='/employee/:id'>
            <SingleEmployee />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
