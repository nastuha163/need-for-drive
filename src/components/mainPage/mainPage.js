import './mainPage.scss';

function MainPage() {
    return (
        <div className='wraper'>
            <div className='logo'> Need for drive </div>
            <div className='map'>
                <div className='map-page'href="URL" src='img/Telegram_white.svg' alt="map img" > </div>
                <div className='map-name'> Ульяновск </div>
            </div>

            <div className='hero_block'>
                <div className='heading1'>Каршеринг</div>
                <div className='heading2'>Need for drive</div>
                <div className='heading3'>Поминутная оплата авто твоего города</div>
            </div>
            <button className='button-page'>
                <div className='button-page-text'>Забронировать</div>
            </button>
            <div className='footer'>
                <div className='footer-left'> © 2016-2019 «Need for drive»</div>
                <div className='footer-right'> 8 (495) 234-22-44 </div>
            </div>
        </div>
    )

}

export default MainPage;