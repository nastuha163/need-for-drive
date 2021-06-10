
import './App.scss';
import BurgerMenu from '../burgerMenu';
import MainPage from '../mainPage';
import Slider from '../slider';
import BookingService from '../bookingService';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import React  from 'react';

function App() {
    const HomePage = () => {
    return (
      <div className="wrapper">
        <div className='menu__left'>
          <BurgerMenu />
        </div>
        <div className='right_container'>
          <div className='main-page'>
            <MainPage />
          </div>
          <div className='slider'>
            <Slider />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router basename="/need-for-drive/">
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/booking/location' exact component={BookingService} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}
export default App;
