
import './App.scss';
import BurgerMenu from '../burgerMenu';
import MainPage from '../mainPage';
import Slider from '../Slider';

function App() {
  return (
    <div className="wrapper">
      <div className='menu__left'>
        <BurgerMenu />
      </div>
      <div className='right_container'>
        <div className='main-page'>
          <MainPage />
        </div>
        <div className='slider'>
          <Slider />
        </div>
      </div>
    </div>

  );
}

export default App;
