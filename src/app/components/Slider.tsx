'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface SliderProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  slidesPerView?: number;
  spaceBetween?: number;
  breakpoints?: import('swiper/types').SwiperOptions['breakpoints'];
}

export function Slider<T>({
  items,
  renderItem,
  slidesPerView = 1,
  spaceBetween = 20,
  breakpoints = {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
}: Readonly<SliderProps<T>>) {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{
        clickable: true,
        bulletClass: 'swiper-pagination-bullet custom-bullet',
        bulletActiveClass:
          'swiper-pagination-bullet-active custom-bullet-active',
      }}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      breakpoints={breakpoints}
      className="w-full"
    >
      {items.map((item, i) => (
        <SwiperSlide key={i} className="flex justify-center">
          {renderItem(item, i)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
