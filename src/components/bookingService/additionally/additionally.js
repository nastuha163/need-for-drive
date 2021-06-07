import React, { useState } from 'react';
import './additionally.scss';

function Additionally() {
    return (
        <div className='wrapper-additionally'>
            <div className='color-block'>
                <div className='header-additionally'>Цвет</div>
                <label><input className='checkbox-round' type="checkbox" id="1" />Любой </label>
                <label className='label-additionally'><input className='checkbox-round' type="checkbox" id="2" />Красный</label>
                <label className='label-additionally'><input className='checkbox-round' type="checkbox" id="3" />Голубой</label>
            </div>



            <div className='services-additionally'>
                <div className='header-additionally'>Дата аренды</div>
                <div class="wrapper-deta">
                    <div className='header-date-additionally'>
                        <div className='header-date-additionally-text'>С</div>
                        <div className='header-date-additionally-text'>По</div>
                    </div>
                    <div>
                        <input className='list-date-additionally' type="text" placeholder="Введите дату и время" />
                        <input className='list-date-additionally' type="text" placeholder="Введите дату и время" />
                    </div>

                </div>
            </div>



            <div className='services-additionally'>
                <div className='header-additionally'>Тариф</div>
                <label><input className='checkbox-round' type="checkbox" id="2" />Поминутно, 7р/мин</label>
                <label><input className='checkbox-round' type="checkbox" id="3" />На сутки, 1999р/сутки</label>
            </div>


            <div className='services-additionally' >
                <div className='header-additionally'>Доп услуги</div>
                <div className='checkbox'>
                    <input type="checkbox" id="check_1" /><label for="check_1">Полный бак, 500р</label>
                </div>
                <div className='checkbox'>
                    <input type="checkbox" id="check_2" /><label for="check_2">Детское кресло, 200р</label>
                </div>
                <div className='checkbox'>
                    <input type="checkbox" id="check_3" /><label for="check_3">Правый руль, 1600р</label>
                </div>
            </div>
        </div>
    )
}

export default Additionally;