import React from 'react';
import './location.scss';
import img1 from './Rectangle.png';

const Location = () => {

    return (
        <>
            <div className="wrapper-location">
                <form >
                    <label className='header-location-text'>Город</label>
                    <input
                        className='list-location'
                        type="search"
                        placeholder="Начните вводить город..."
                    // onChange={}
                    />
                </form>
                <form>
                    <label className='header-location-text'>Пункт выдачи</label>
                    <input
                        className='list-location'
                        type="search"
                        placeholder="Начните вводить пункт..."
                    // onChange={} 
                    />
                </form>
            </div>
            <div className='map-location'>Выбрать на карте:</div>
            <img src={img1} alt='карта' />
        </>
    )

}
export default Location;
