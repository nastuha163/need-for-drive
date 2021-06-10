import React from 'react';
import './modelCars.scss';
import Car_1 from './imgCars/kia_1.png';
import Car_2 from './imgCars/koenigsegg.png';
import Car_3 from './imgCars/lada.png';
import Car_4 from './imgCars/land_rover.png';
import Car_5 from './imgCars/lotus.png';
import Car_6 from './imgCars/mercedes.png';
import Car_7 from './imgCars/mitsubishi.png';
import Car_8 from './imgCars/nissan.png';
import Car_9 from './imgCars/toyota.png';
function ModelCars() {

    const item = [
        {
            id: 1,
            price: '10000-12000 P',
            brand: 'KIA-Rio',
            img: Car_1
        },
        {
            id: 2,
            price: '12000-20000 P',
            brand: 'Koenigsegg-CC8S',
            img: Car_2
        },
        {
            id: 3,
            price: '10000-12000 P',
            brand: 'LADA-Granta',
            img: Car_3
        },
        {
            id: 4,
            price: '12000-20000 P',
            brand: 'Land-Rover-Sport-II',
            img: Car_4
        },
        {
            id: 5,
            price: '12000-20000 P',
            brand: 'Lotus-Esprit-Concept',
            img: Car_5
        },
        {
            id: 6,
            price: '12000-20000 P',
            brand: 'Mercedes-Benz-W-205',
            img: Car_6
        },
        {
            id: 7,
            price: '10000-12000 P',
            brand: 'Mitsubishi_Lancer',
            img: Car_7
        },
        {
            id: 8,
            price: '10000-12000  P',
            brand: 'Nissan-Micra',
            img: Car_8
        },
        {
            id: 9,
            price: '10000-12000 P',
            brand: 'Toyota-Corolla',
            img: Car_9
        }
    ]

    const modelCars = item.map((item) => {
        return (
            <div className='forma-for-cards' key={item.id}>
                <div className='text-cards-brand'>{item.brand} </div>
                <div className='text-cards-price'>{item.price}</div>
                <img className='cards-img' src={item.img} alt={item.brand} />
            </div>
        );
    });


    return (
        <div>
            <div className='buttons-model-cars'>
                <label><input className='checkbox-round' type="checkbox" id="1" />Все модели </label>
                <label className='label-model-cars'><input className='checkbox-round' type="checkbox" id="2" />Эконом</label>
                <label className='label-model-cars'><input className='checkbox-round' type="checkbox" id="3" />Премиум</label>
            </div>
            <div className='cards-model-cars'>
                {modelCars}
            </div>
        </div>
    )
}

export default ModelCars;