import './burgerMenu.scss';
import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import img from '../icons/map.svg';
import Telegram from '../icons/Telegram_white.svg';
import Facebook from '../icons/Facebook_white.svg';
import Instagram from '../icons/Instagram_white.svg'

const BurgerMenu = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <img className='burger-menu-btn-open' src='img/menu_btn.png' alt="Open menu" onClick={toggle} />
            <h5 className='language'>Eng</h5>
            <Modal className='menu_modal fone' isOpen={modal} toggle={toggle} >
                <img className='burger-menu-btn-close' onClick={toggle} src='img/x.png' alt="Close menu" />
                <div className='buttons-burger'>
                    <div className='button-burger' href="URL"> ПАРКОВКА</div>
                    <div className='button-burger' href="URL"> СТРАХОВКА</div>
                    <div className='button-burger' href="URL"> БЕНЗИН </div>
                    <div className='button-burger' href="URL"> ОБСЛУЖИВАНИЕ </div>
                </div>
                <div className='icons-burger'>
                    <img className='icon-burger' href="URL" src={Telegram} alt="Telegram" />
                    <img className='icon-burger' href="URL" src={Facebook} alt="Facebook" />
                    <img className='icon-burger' href="URL" src={Instagram} alt="Instagram" />
                </div>
            </Modal>
        </div>
    );
}


export default BurgerMenu;
