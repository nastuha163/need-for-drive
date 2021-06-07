import React, { useState } from 'react';
import './location.scss';
import { Component } from 'react';
import img1 from './Rectangle.png';

export default class Location extends Component {
    render() {

        return (
            <>
                <div class="wrapper-location">
                    <div className='header-location'>
                        <div className='header-location-text'>Город</div>
                        <div className='header-location-text'>Пункт выдачи</div>
                    </div>
                    <div>
                        <input className='list-location' type="text" />
                        <input className='list-location' type="text" placeholder="Начните вводить пункт..." />
                    </div>

                </div>
                <div className='map-location'>Выбрать на карте:</div>
                <img src={img1} alt='карта' />
            </>
        )
    }
}
