
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import home from './pages/home';
import coldStorage from './pages/coldStorage';
import traffic from './pages/traffic';
import transport from './pages/transport';

import SearchBar from './components/SearchBar'
import "./styles/SearchBar.css"
function App() {
  return (
    <Router>
      <Navbar/>
      <SearchBar/>
      <Switch>
        <Route path='/' exact component={home}/>
        <Route path='/coldStorage' component={coldStorage}/>
        <Route path='/traffic' component={traffic}/>
        <Route path='/transport' component={transport}/>
      </Switch>
    </Router>
  );
}

export default App;
