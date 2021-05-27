import './burgerMenu.scss';
import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import open from '../icons/menu_open.svg';
import close from '../icons/menu_close.svg';

const BurgerMenu = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>
            <img className='burger-menu-btn-open' src={open} alt="Open menu" onClick={toggle} />
            <div className='language'>Eng</div>
            <Modal className='menu_modal fone' isOpen={modal} toggle={toggle} >
                <img className='burger-menu-btn-close' onClick={toggle} src={close} alt="Close menu" />
                <div className='buttons-burger'>
                    <div className='button-burger'>ПАРКОВКА</div>
                    <div className='button-burger'>СТРАХОВКА</div>
                    <div className='button-burger'>БЕНЗИН</div>
                    <div className='button-burger'>ОБСЛУЖИВАНИЕ</div>
                </div>
                <div className='icons-burger'>
                    <a href="javascript:void(0)">
                        <i className="burger__icon telegram_icon"></i>
                    </a>
                    <a href="javascript:void(0)">
                        <i className="burger__icon facebook_icon"></i>
                    </a>
                    <a href="javascript:void(0)">
                        <i className="burger__icon instagram_icon"></i>
                    </a>
                </div>
            </Modal>
        </>
    );
}

export default BurgerMenu;
