import './mainPage.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import mapSvg from '../../assets/icons/map.svg';

const MainPage = () => {
    return (
        <>
            <div className='upper-block'>
            <Link to='/' className='logo'>Need for drive</Link>
                <div type='button' className='map'>
                    <img className='map-page' src={mapSvg} alt="map img" />
                    <div className='map-name'>Ульяновск</div>
                </div>
            </div>
            <div>
                <div className='hero_block'>
                    <div className='heading1'>Каршеринг</div>
                    <div className='heading2'>Need for drive</div>
                    <div className='heading3'>Поминутная аренда авто твоего города</div>
                </div>
                <button className='button-page' type="button">
                    <Link to='/booking/location' className='button-page-text'>Забронировать</Link>
                </button>
            </div>
            <div className='footer'>
                <div className='footer-left'>© 2016-2019 «Need for drive»</div>
                <div type='button' className='footer-right'> 8 (495) 234-22-44 </div>
            </div>
        </>
    )
}

export default MainPage;