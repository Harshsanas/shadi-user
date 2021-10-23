
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import PageNotFound from './Components/Welcome';
import PrivateRoute from './Components/PrivateRoute';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Welcome from './Components/Welcome'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Welcome/>
          </Route>
          <PrivateRoute exact path="/userDetails">
            <Home />
          </PrivateRoute>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
