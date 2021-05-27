import React, { useState } from 'react';
import Slider_1 from '../img/Slider_1.svg';
import Slider_2 from '../img/Slider_2.svg';
import Slider_3 from '../img/Slider_3.svg';
import Slider_4 from '../img/Slider_4.svg';
import pointer from '../icons/Pointer.svg';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import './slider.scss';

const items = [
  {
    id: 1,
    src: Slider_1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    heder: 'Бесплатная парковка',
    text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
    color: 'color-button-1',
    className: 'slider__img1'
  },
  {
    id: 2,
    src: Slider_2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    heder: 'Страховка',
    text: 'Полная страховка страховка автомобиля',
    color: 'color-button-2',
    className: 'slider__img2'
  },
  {
    id: 3,
    src: Slider_3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    heder: 'Бензин',
    text: 'Полный бак на любой заправке города за наш счёт',
    color: 'color-button-3',
    className: 'slider__img3'
  },
  {
    id: 4,
    src: Slider_4,
    altText: 'Slide 4',
    caption: 'Slide 4',
    heder: 'Обслуживание',
    text: 'Автомобиль проходит еженедельное ТО',
    color: 'color-button-4',
    className: 'slider__img4'
  }
];

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    console.log(1)
    if (animating)
      return
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem className="custom-tag" tag="div" key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}>
        <div>
          <div className={item.className}>
          </div>
          <div>
            <div>
              <div className='hedder'>{item.heder}</div>
              <p className='text'>{item.text} </p>
            </div>
            <button className={item.color}>Подробнее</button>
          </div>
        </div>
      </CarouselItem>
    );
  });
  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous} >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText=" " onClickHandler={previous} />
      <CarouselControl direction="next" directionText=" " onClickHandler={next} />
    </Carousel>
  );
}

export default Slider;
