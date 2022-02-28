// import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'> <Home></Home> </Route>
          <Route exact path='/home'> <Home></Home> </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
