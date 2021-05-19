
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import Projects from './components/pages/Projects/Projects';

import SignUp from './components/pages/SignUp/SignUp';
import contactUs from './components/pages/ContactUs/ContactUs';


function App() {
  return (
    <Router >
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/contactUs' component={contactUs}/>
        <Route path='/sign-up' component={SignUp}/>
        
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
