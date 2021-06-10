
import './bookingService.scss';
import React from 'react';
import BurgerMenu from '../burgerMenu';
import mapSvg from '../../assets/icons/map.svg';
import Additionally from './additionally';
import Location from './location';
import ModelCars from './modelCars';
import Result from './result';
import { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default class BookingService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            street: ""
        }; 
        this.onChangeCity = this.onChangeCity.bind(this);
    }

    onChangeCity(value) {
        this.setState({
            city: value })
        console.log(this.state.city)
    }

    onChangeStreet(value) {
        this.setState({
            street: value })
        console.log(this.state.street)
    }
    render() {
     
        const Header = () => {
            return (
                <>
                    <div className='header-block'>
                        <Link to='/' className='header-name'>Need for drive</Link>
                        <div type='button' className='map-booking-service'>
                            <img className='map-page' src={mapSvg} alt="map img" />
                            <div className='map-name'>Ульяновск</div>
                        </div>
                    </div>
                    <div>
                        <div className='buttons-booking-service'>
                            <div className='button-booking-service' type='button'>Местоположение</div>
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
                <Router basename="/need-for-drive/" >
                    <div className='wrapper-booking-service'>
                        <div className='left-menu-booking-service'>
                            <BurgerMenu />
                        </div>
                        <div className='right-menu-booking-service'>
                            <Header />
                            <div className='booking-block'>
                                <div className='custom-part'>
                                    <Location onChangeCity={this.onChangeCity} onChangeStreet={this.onChangeStreet} />
                                    <Route path='/booking/location/modal/' exact component={ModelCars} />
                                    <Route path='/booking/location/modal/additionally/' exact component={Additionally} />
                                    <Route path='/booking/location/modal/additionally/result' exact component={Result} />
                                    <Redirect to='/' />
                                </div>
                                <div className='order'>
                                    <div className='order-header'> Ваш заказ: </div>
                                    <div className='order-list'>
                                        <div>Пункт выдачи:{this.state.city}</div>
                                        {/* <div>Адрес {this.state.street}</div> */}
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