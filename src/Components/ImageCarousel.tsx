import { useState } from "react";
import { LandMedia } from "../Response";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { TbShare3 } from "react-icons/tb";

import "./card.css";

interface IImageCarousel {
  media: LandMedia[];
}
const ImageCarousel = ({ media }: IImageCarousel) => {
  const [imageIndex, setImageIndex] = useState<number>(0);

  const handleNext = () => {
    if (imageIndex === media.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex((prev: number) => prev + 1);
    }
  };

  const handleBack = () => {
    if (imageIndex === 0) {
      setImageIndex(media.length - 1);
    } else {
      setImageIndex((prev: number) => prev - 1);
    }
  };

  return (
    <div className="relative w-full">
      <div className="absolute right-1 p-2 top-2 bg-white opacity-70 rounded-full w-8 h-8">
        <FaRegHeart/>
      </div>
      <div className="absolute p-2 right-10 top-2 bg-white opacity-70 rounded-full w-8 h-8">
        <TbShare3/>
      </div>
      <img
        className="w-full h-60 rounded-t-xl"
        src={media[imageIndex]?.image || "../assests/dummy.png"}
        alt={media[imageIndex]?.id.toString() || "noImage"}
      />
      <button
        className="arrowButtons absolute top-28 px-2"
        onClick={handleBack}
      >
        <IoIosArrowBack size={30} />
      </button>
      <button
        className="arrowButtons absolute top-28 right-0 px-2"
        onClick={handleNext}
      >
        <IoIosArrowForward size={30} />
      </button>
    </div>
  );
};

export default ImageCarousel;
