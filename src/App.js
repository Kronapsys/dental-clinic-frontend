import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;