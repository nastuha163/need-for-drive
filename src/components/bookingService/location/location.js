import React from 'react';
import './location.scss';
// import img1 from './Rectangle.png';

// const address = [
//     { id: 1, street: 'Ульяновк, Димитровградское ш., 8к', },
//     { id: 1, street: 'Ульяновк, Октябрьская ул., 22Л', },
//     { id: 2, street: 'Самара, Московское ш, 264', },
//     { id: 2, street: 'Самара, Заводское ш., 14, корп. 1', },
//     { id: 2, street: 'Самара, Алма-Атинская ул., 87', },
//     { id: 3, street: 'Казань, Московская ул., 20', },
//     { id: 3, street: 'Казань, Даурская ул., 18', },
//     { id: 4, street: 'Саранск, Строительная ул., 1Е', }
// ];

// const SelectAddress = address.map((id, street) => {
//     return(
//         <datalist>
//         <option id={id} value={street} />
//         </datalist>
//     )

// });

const Location = () => {

    return (
        <>
            <div className="wrapper-location">
                <div>
                    <label className='header-location-text'>Город</label>
                    <input className='list-location'
                        list='select-city'
                        type="search"
                        placeholder="Начните вводить город..."
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
                        placeholder="Начните вводить пункт..."

                    />
                    <datalist id='select-address'>
                        {/* <option id={SelectAddress} /> */}
                    </datalist>
                </div>
            </div>
            <div className='map-location'>Выбрать на карте:</div>
            {/* <img src={img1} alt='карта' /> */}
        </>
    )

}
export default Location;
