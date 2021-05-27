import './mainPage.scss';
import img from '../icons/map.svg';
function MainPage() {
    return (

        <div className='main-page'>
            <div className='logo'> Need for drive </div>
            <div className='map'>
                <img className='map-page' src={img} alt="map img"/>
                <div className='map-name'> Ульяновск </div>
            </div>
            <div className='footer'>
                <div className='footer-left'> © 2016-2019 «Need for drive»</div>
                <div className='footer-right'> 8 (495) 234-22-44 </div>
            </div>
            <div className='hero_block'>
                <div className='heading1'>Каршеринг</div>
                <div className='heading2'>Need for drive</div>
                <div className='heading3'>Поминутная оплата авто твоего города</div>
            </div>
            <button className='button-page'>
                <div className='button-page-text'>Забронировать</div>
            </button>
        </div>
    )
}

export default MainPage;