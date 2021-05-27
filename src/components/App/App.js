
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
        <div className='main_page'>
          <MainPage />
        </div>
        <div className='slider'>
          <Slider />
        </div>
      </div>
    </div>

  );
}

// function App() {
//   return (
//     <div className="wrapper">
//       <div className="left_container">
//         <div className='menu'>
//           <BurgerMenu/>
//         </div>
//         <div className='main_page'>
//           <MainPage />
//         </div>
//       </div>
//       <div className='slider'>
//         {/* <Slider /> */}
//       </div>
//     </div>

//   );
// }

export default App;
