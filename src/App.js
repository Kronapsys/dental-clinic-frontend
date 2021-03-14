import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './containers/LogIn/LogIn';
import Staff from './containers/Staff/Staff';
import Register from './containers/Register/Register';
import Profile from './containers/Profile/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>


        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/logIn" exact component={Login}/>
          <Route path='/staff' exact component={Staff}/>
          <Route path='/register' exact component={Register}/>
          <Route path='/profile' exact component={Profile}/>
        </Switch>

        <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;