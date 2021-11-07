import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './views/Home';
import Members from './views/Members';
import Navbar from './components/Navbar';

function App() {
  return (
    
    
  <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/> 
        <Route path="/members" exact component={Members}/>
      </Switch>
  </BrowserRouter>
  );
}

export default App;
