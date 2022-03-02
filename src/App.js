// import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AddService from './components/AddService/AddService';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Services from './components/Services/Services';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'> <Home></Home> </Route>
            <Route path='/home'> <Home></Home> </Route>
            <Route path='/about'> <About></About> </Route>
            <Route path='/services'> <Services></Services> </Route>
            <Route path='/addservice'> <AddService></AddService> </Route>
            <Route path='/login'> <Login></Login> </Route>
            <PrivateRoute path="booking/:bookingId">
              
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
