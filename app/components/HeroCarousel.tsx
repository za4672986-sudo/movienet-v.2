"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const banners = [
  {
    id: 1,
    title: "Interstellar",
    image:
      "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  },
  {
    id: 2,
    title: "The Batman",
    image:
      "https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
  },
  {
    id: 3,
    title: "Avatar",
    image:
      "https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
  },
];

export default function HeroCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      loop
    >
      {banners.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div
            className="h-[80vh] bg-cover bg-center flex items-end"
            style={{
              backgroundImage: `linear-gradient(to top, black, transparent), url(${movie.image})`,
            }}
          >
            <div className="p-16">
              <h1 className="text-6xl font-bold">{movie.title}</h1>

              <button className="mt-6 bg-red-600 px-8 py-4 rounded-xl">
                ▶ Watch Trailer
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
