import React, { useState } from 'react';
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
    src: '/img/Slider_1.png',
    altText: 'Slide 1',
    caption: 'Slide 1',
    hedder: 'Бесплатная парковка',
    text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.'
  },
  {
    id: 2,
    src: '/img/Slider_2.png',
    altText: 'Slide 2',
    caption: 'Slide 2',
    hedder: 'Страховка',
    text: 'Полная страховка страховка автомобиля'
  },
  {
    id: 3,
    src: '/img/Slider_3.png',
    altText: 'Slide 3',
    caption: 'Slide 3',
    hedder: 'Бензин',
    text: 'Полный бак на любой заправке города за наш счёт'

  },
  {
    id: 4,
    src: '/img/Slider_4.png',
    altText: 'Slide 4',
    caption: 'Slide 4',
    hedder: 'Обслуживание',
    text: 'Автомобиль проходит еженедельное ТО'
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
          <img className='slider__img' src={item.src}/>
          <div className='hedder'>{item.hedder}</div>
          <p className='text'> {item.text} </p>
        </div>
        <button className='button'>Подробнее</button>
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous} >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText=" " onClickHandler={previous} />
        <CarouselControl direction="next" directionText=" " onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default Slider;
