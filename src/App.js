import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;