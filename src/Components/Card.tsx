import { LandDataResult } from "../Response";
import ImageCarousel from "./ImageCarousel";

interface ICardProps {
  details: LandDataResult;
}

const Card = ({ details }: ICardProps) => {
  return (
    <div>
      {details?.land_media?.length > 0 && (
        <ImageCarousel media={details?.land_media} />
      )}
    </div>
  );
};

export default Card;
