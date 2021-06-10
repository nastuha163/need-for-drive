import React from 'react';
import './location.scss';
import { Component } from 'react';
import img1 from './Rectangle.png';

export default class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "fgg",
            street: "df"
        };
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeStreet = this.onChangeStreet.bind(this);
   
    }

    onChangeCity(e) {
        this.setState({
            city: e.target.value
        })
    }
 
    onChangeStreet(e) {
        this.setState({
            street: e.target.value
        })
    }

    render() {
        return (
            <>
                <div className="wrapper-location">
                    <form >
                        <label className='header-location-text'>Город</label>
                        <input
                            className='list-location'
                            type="search"
                            placeholder="Начните вводить город..."
                            onChange={this.onChangeCity}
                            value={this.state.city}
                        />
                    </form>
                    <form>
                        <label className='header-location-text'>Пункт выдачи</label>
                        <input
                            className='list-location'
                            type="search"
                            placeholder="Начните вводить пункт..."
                            onChange={this.onChangeStreet} />
                    </form>
                </div>
                <div className='map-location'>Выбрать на карте:</div>
                <img src={img1} alt='карта' />
            </>
        )
    }
}

