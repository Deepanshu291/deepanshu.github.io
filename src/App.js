// import logo from './logo.svg';
import './App.scss';
import Navbar from './Components/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Home from './Pages/Home';
import Project from './Pages/Project';
import About from './Pages/About';

const App=() => {
  return (
    <Switch>
      <Route exact path="/"> 
          <HOME/>
      </Route>
      <Route path="/project"> 
          <PROJECT/>
      </Route>
      <Route path="/about"> 
          <ABOUT/>
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

const HOME = () => {
  return(
    <>
      <Navbar/>,
       <Home/>
    </>
    
    
  );
}

const PROJECT = () => {
  return(
    <>
    <Navbar/>,
    <Project/>
    </>
  );
}

const ABOUT = () => {
  return(
    <>
    <Navbar/>,
    <About/>
    </>
  );
}



export default App;
