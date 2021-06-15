
import './bookingService.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import BurgerMenu from '../burgerMenu';
import mapSvg from '../../assets/icons/map.svg';
import Additionally from './additionally';
import Location from './location';
import ModelCars from './modelCars';
import Result from './result';


import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';


const Tabs = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className='buttons-booking-service'>
            <Nav tabs className='button-booking-service'>
                <NavItem>
                    <NavLink type='button'
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >Местоположение
            </NavLink>
                </NavItem>
                <div className='pointer' />
                <NavItem>
                    <NavLink type='button'
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >Модель
            </NavLink>
                </NavItem>
                <div className='pointer' />
                <NavItem>
                    <NavLink type='button'
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >Дополнительно
            </NavLink>
                </NavItem>
                <div className='pointer' />
                <NavItem>
                    <NavLink type='button'
                        className={classnames({ active: activeTab === '4' })}
                        onClick={() => { toggle('4'); }}
                    >Итого
            </NavLink>
                </NavItem>
            </Nav>

            <TabContent className='custom-part' activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <Location />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="6">
                            <ModelCars />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                        <Col sm="6">
                            <Additionally />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="4">
                    <Row>
                        <Col sm="6">
                            <Result />
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

const Header = () => {
    return (
        <div className='header-block'>
            <Link to='/' className='header-name'>Need for drive</Link>
            <div type='button' className='map-booking-service'>
                <img className='map-page' src={mapSvg} alt="map img" />
                <div className='map-name'>Ульяновск</div>
            </div>
        </div>
    )
}

const Order = () => {
    return (
        <div className='order'>
            <div className='order-header'> Ваш заказ: </div>
            <div className='order-list'>
                <div>Пункт выдачи:</div>
                <div>Адрес:</div>
            </div>
            <button className='order-button'>Выбрать модель</button>
        </div>
    )
}
const BookingService = () => {
    return (
        <>
            <div className='wrapper-booking-service'>
                <div className='left-menu-booking-service'>
                    <BurgerMenu/>
                </div>
                <div className='right-menu-booking-service'>
                    <Header/>
                    <div className='booking-block'>
                        <Tabs/>
                        <Order/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookingService;