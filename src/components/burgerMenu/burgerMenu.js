import './burgerMenu.scss';
import React, { useState } from 'react';
import { Modal } from 'reactstrap';

const BurgerMenu = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>
            <div className='burger-menu-btn-open open_icon' alt="Open menu" onClick={toggle} />
            <div className='language'>Eng</div>
            <Modal className='menu_modal fone' isOpen={modal} toggle={toggle} >
                <div className='burger-menu-btn-close close_icon' onClick={toggle} alt="Close menu" />
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
