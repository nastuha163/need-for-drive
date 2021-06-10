import './burgerMenu.scss';
import React, { useState } from 'react';
import { Modal } from 'reactstrap';

const BurgerMenu = () => {

    const [modal, setModal] = useState(false);
    const goToMenu = () => setModal(!modal);

    return (
        <>
            <div className='burger-menu-btn-open open_icon' alt="Open menu" onClick={goToMenu} />
            <div type='button' className='language'>Eng</div>
            <Modal className='menu_modal fone' isOpen={modal} toggle={goToMenu} >
                <div className='burger-menu-btn-close close_icon' onClick={goToMenu} alt="Close menu" />
                <div className='buttons-burger'>
                    <div type='button' className='button-burger'>ПАРКОВКА</div>
                    <div type='button' className='button-burger'>СТРАХОВКА</div>
                    <div type='button' className='button-burger'>БЕНЗИН</div>
                    <div type='button'  className='button-burger'>ОБСЛУЖИВАНИЕ</div>
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
