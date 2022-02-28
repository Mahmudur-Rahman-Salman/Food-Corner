// import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'> <Home></Home> </Route>
          <Route path='/home'> <Home></Home> </Route>
          <Route path='/about'> <About></About> </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
