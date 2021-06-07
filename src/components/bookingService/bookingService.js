
import './bookingService.scss';
import React from 'react';
import BurgerMenu from '../burgerMenu';
import img from '../icons/map.svg';
import Additionally from './additionally';
import Location from './location';
import ModelCars from './modelCars';
import Result from './result';
import { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
// import HomePage from '../App';

export default class BookingService extends Component {

    render() {
        function Header() {
            return (
                <>
                    <div className='header-block'>
                        <Link to='/' className='header-name'>Need for drive</Link>
                        <div className='map-booking-service'>
                            <img className='map-page' src={img} alt="map img" />
                            <div className='map-name'>Ульяновск</div>
                        </div>
                    </div>
                    <div>
                        <div className='buttons-booking-service'>
                            <Link to='/booking/location' className='button-booking-service' type='button'>Местоположение</Link>
                            <div className='pointer' />
                            <Link to='/booking/location/modal' className='button-booking-service'>Модель</Link>
                            <div className='pointer' />
                            <Link to='/booking/location/modal/additionally' className='button-booking-service'>Дополнительно</Link>
                            <div className='pointer' />
                            <Link to='/booking/location/modal/additionally/result' className='button-booking-service'>Итого</Link>
                        </div>
                    </div>
                </>
            )
        }


        return (
            <Router basename="/need-for-drive/">
                <div className='wrapper-booking-service'>
                    <div className='left-menu-booking-service'>
                        <BurgerMenu />
                    </div>
                    <div className='right-menu-booking-service'>
                        <Header />
                        <div className='booking-block'>
                            <div className='custom-part'>
                                <Route path='/booking/location/' exact component={Location} />
                                <Route path='/booking/location/modal/' exact component={ModelCars} />
                                <Route path='/booking/location/modal/additionally/' exact component={Additionally} />
                                <Route path='/booking/location/modal/additionally/result' exact component={Result} />
                                <Redirect to='/booking/' />
                            </div>
                            <div className='order'>
                                <div className='order-header'> Ваш заказ: </div>
                                <div className='order-list'>
                                    <div>Пункт выдачи</div>
                                    <div>Адрес</div>
                                </div>
                                <button className='order-button'>Выбрать модель</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}
