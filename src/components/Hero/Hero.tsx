import * as React from 'react';
import Slider, { Settings } from 'react-slick';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { heroContent } from '../../data-source';
import { IHeroData } from '../../interfaces';
import { Link } from 'gatsby';

function PrevArrow({ className, style, onClick }: any) {
  return (
    <button
      className={`${className}  !py-6 !flex !items-center !justify-center !left-0 !text-yellow-500 !bg-transparent hover:!bg-white !h-auto !w-auto z-10 before:!content-['']`}
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronLeftIcon className='h-8 text-yellow-500' />
    </button>
  );
}

function NextArrow({ className, style, onClick }: any) {
  return (
    <button
      className={`${className} !py-6 !flex !items-center !justify-center !right-0 !text-yellow-500 !bg-transparent hover:!bg-white !h-auto !w-auto z-10 before:!content-[]`}
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronRightIcon className='h-8 text-yellow-500' />
    </button>
  );
}

const HeroItem = ({ content }: { content: IHeroData }) => {
  return (
    <div
      className='h-128 !flex items-center justify-center relative bg-cover bg-center'
      style={{ backgroundImage: `url('${content.img}')` }}
    >
      <div className='container flex items-center mx-auto'>
        <div className='p-3 flex flex-col divide-y-2 divide-amber-400 max-w-md'>
          <div className='bg-black-600 text-white uppercase border-bottom-1 text-xl bg-gray-800 p-5'>
            <h2>{content?.title}</h2>
          </div>
          <div className='bg-gray-800 p-5 text-white opacity-70'>
            <p className='block mb-4'>{content?.description}</p>
            <Link to="/services" className='border rounded-3xl border-white text-white font-bold px-4 py-2 uppercase border-radius hover:bg-amber-400 hover:border-amber-400'>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Hero = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => {
      return <div style={{ bottom: '0'}}>{dots}</div>
    }
  };

  return (
    <div className='h-128 bg-gray-50 relative'>
      <Slider {...settings}>
        {heroContent.map((content, idx) => (
          <HeroItem key={idx} content={content} />
        ))}
      </Slider>
    </div>
  );
};
