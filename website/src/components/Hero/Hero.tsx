import * as React from "react";
import Slider, { Settings } from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { IHeroData } from "../../interfaces";
import { Link } from "gatsby";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  StaticImage,
} from "gatsby-plugin-image";

function PrevArrow({ className, style, onClick }: any) {
  return (
    <button
      className={`${className} !hidden md:!flex !py-6 !items-center !justify-center !left-0 !text-yellow-500 !bg-transparent hover:!bg-white !h-auto !w-auto z-10 before:!content-['']`}
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronLeftIcon className="h-8 text-yellow-500" />
    </button>
  );
}

function NextArrow({ className, style, onClick }: any) {
  return (
    <button
      className={`${className} !hidden md:!flex !py-6 !items-center !justify-center !right-0 !text-yellow-500 !bg-transparent hover:!bg-white !h-auto !w-auto z-10 before:!content-[]`}
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronRightIcon className="h-8 text-yellow-500" />
    </button>
  );
}

const HeroItem = ({ content }: { content: IHeroData }) => {
  const image = getImage(content.img.localFile) as IGatsbyImageData;
  return (
    <div className="h-128 !flex items-center justify-center relative bg-cover bg-center">
      <div className="w-full">
        <GatsbyImage image={image} alt={content.title} />
      </div>

      <div className="absolute container flex items-center mx-auto">
        <div className="p-3 flex flex-col divide-y-2 divide-amber-400 max-w-md mx-auto md:m-0">
          <div className="bg-black-600 text-white uppercase border-bottom-1 text-xl bg-gray-800 p-5">
            <h2>{content?.title}</h2>
          </div>
          <div className="bg-gray-800 p-5 text-white opacity-70">
            <p className="block mb-4">{content?.description}</p>
            <Link
              to="/services"
              className="border rounded-3xl border-white text-white font-bold px-4 py-2 uppercase border-radius hover:bg-amber-400 hover:border-amber-400"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Hero = ({ heroes }: { heroes: any }) => {
  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => {
      return <div style={{ bottom: "0" }}>{dots}</div>;
    },
  };

  return (
    <div className="h-128 bg-gray-50 relative">
      <Slider {...settings}>
        {heroes?.nodes?.map((content: IHeroData, idx: number) => (
          <HeroItem key={idx} content={content} />
        ))}
      </Slider>
    </div>
  );
};
