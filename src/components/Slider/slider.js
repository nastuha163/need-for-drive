import React, { useMemo, useState, useCallback } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import './slider.scss';
import "bootstrap/dist/css/bootstrap.min.css";


const items = [
  {
    id: 1,
    caption: 'Slide 1',
    heder: 'Бесплатная парковка',
    text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
    color: 'color-button-1',
    className: 'slider__img1'
  },
  {
    id: 2,
    caption: 'Slide 2',
    heder: 'Страховка',
    text: 'Полная страховка страховка автомобиля',
    color: 'color-button-2',
    className: 'slider__img2'
  },
  {
    id: 3,
    caption: 'Slide 3',
    heder: 'Бензин',
    text: 'Полный бак на любой заправке города за наш счёт',
    color: 'color-button-3',
    className: 'slider__img3'
  },
  {
    id: 4,
    caption: 'Slide 4',
    heder: 'Обслуживание',
    text: 'Автомобиль проходит еженедельное ТО',
    color: 'color-button-4',
    className: 'slider__img4'
  }
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goToNext = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const goToPrevious = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }


  const showAnimating = useCallback(  
      () => {  
        setAnimating(true) 
    },
    [true],  
  );
  const removeAnimating = useCallback(  
      () => {  
        setAnimating(false) 
    },
    [false],  
  );

  const slides = useMemo(() => items.map((item) => {
    return (
      <CarouselItem 
      onExiting = {() => showAnimating}
      onExited = {() => removeAnimating}
      key={item.id}
      >
        <div className='carousel-block-info'>
          <div className='carousel-block-info__content'>
            <div>
              <div className='hedder'>{item.heder}</div>
              <p className='text'>{item.text} </p>
            </div>
            <button className={item.color}>Подробнее</button>
          </div>
        </div>
        <div className={item.className}></div>
      </CarouselItem>
    );
  })
  );
  return (
    <div>
    <Carousel
        activeIndex={activeIndex}
        next={goToNext}
        previous={goToPrevious}
        interval={10000}
      >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText=" " onClickHandler={goToPrevious} />
      <CarouselControl direction="next" directionText=" " onClickHandler={goToNext} />
    </Carousel>
    </div>
  );
  };

export default Slider;
