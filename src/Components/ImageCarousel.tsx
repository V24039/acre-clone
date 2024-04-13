import { useState } from "react";
import { LandMedia } from "../Response";

interface IImageCarousel {
  media: LandMedia[];
}
const ImageCarousel = ({ media }: IImageCarousel) => { 
  console.log(media)
  const [imageUrl, setImageUrl] = useState<{ index: number; url: string }>({
    index: 0,
    url: media[0].image,
  });

  const handleNext = () => {
    setImageUrl((prev) => ({
      index: prev.index + 1,
      url: media[prev.index + 1]?.image,
    }));
  };

  const handleBack = () => {
    setImageUrl((prev) => ({
      index: prev.index - 1,
      url: media[prev.index - 1]?.image,
    }));
  };

  return (
    <div>
      <button onClick={handleBack}>Next</button>
      <img src={imageUrl.url} />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default ImageCarousel;
