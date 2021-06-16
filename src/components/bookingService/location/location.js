import React, { useState } from 'react';
import './location.scss';
// import img1 from './Rectangle.png';

const address = [
    { city: 'Ульяновск', street: 'Димитровградское ш., 8к, Ульяновск' },
    { city: 'Ульяновск', street: 'Октябрьская ул., 22Л, Ульяновск' },
    { city: 'Самара', street: 'Московское ш, 264, Самара' },
    { city: 'Самара', street: 'Заводское ш., 14, корп. 1, Самара' },
    { city: 'Самара', street: 'Алма-Атинская ул., 87, Самара' },
    { city: 'Казань', street: 'Московская ул., 20, Казань'},
    { city: 'Казань', street: 'Даурская ул., 18, Казань'},
    { city: 'Саранск', street: 'Строительная ул., 1Е, Саранск', }
];



const Location = () => {
    const [itemCity, setCity] = useState('');
    const [itemAddress, setAddress] = useState('');
    let [ListAddress, setAddressList] = useState([]);

    const setAddressValue = (value) => {
        setAddress(value.target.value);
    }
    const setCityValue = (value) => {
        setCity(value.target.value)
        selectAddress(value.target.value);
        setAddress('');
    }

    const selectAddress = (itemCity) => {
        ListAddress = address.filter((itemAddress) => {
            if (itemCity === itemAddress.city) {
                return (
                    itemAddress.street
                )
            }
        });
        setAddressList(ListAddress);
        return ListAddress;
    }

    return (
        <>
            <div className="wrapper-location">
                <div>
                    <label className='header-location-text'>Город</label>
                    <input className='list-location'
                        list='select-city'
                        type="search"
                        placeholder="Начните вводить город..."
                        value={itemCity}
                        onChange={event => setCityValue(event)}
                    />
                    <datalist id='select-city'>
                        <option id='1' value="Ульяновск" />
                        <option id='2' value="Самара" />
                        <option id='3' value="Казань" />
                        <option id='4' value="Саранск" />
                    </datalist>
                </div>
                <div>
                    <label className='header-location-text'>Пункт выдачи</label>
                    <input className='list-location'
                        list='select-address'
                        type="search"
                        value={itemAddress}
                        onChange={event => setAddressValue(event)}
                        placeholder="Начните вводить пункт..."

                    />
                    <datalist id='select-address'>
                        {ListAddress.map((item, key) =>
                            <option key={key} value={item.street} />
                        )}
                    </datalist>
                </div>
            </div>
            <div className='map-location'>Выбрать на карте: {itemCity}</div>
            {/* <img src={img1} alt='карта' /> */}
        </>
    )

}
export default Location;
