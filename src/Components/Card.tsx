import { LandDataResult } from "../Response";
import ImageCarousel from "./ImageCarousel";
import { MdVerified } from "react-icons/md";

interface ICardProps {
  details: LandDataResult;
}

const Card = ({ details }: ICardProps) => {

  const getPrice = () => {
    if (details?.total_land_size_in_acres?.acres === 0) {
      const price = details?.total_price * 10
      if(price<1000){
        return `${price/10} lakh for full property`;
      }
      return `${price/1000} crores for full property`;
    }

    if (details?.price_per_acre_crore?.crore === 0) {
      return `${details?.price_per_acre_crore?.lakh} lakh per acre`;
    }
    return `${details?.price_per_acre_crore?.crore}.${details?.price_per_acre_crore?.lakh} crores per acre`;
  };

  const getLandArea = () => {
    if (details?.total_land_size_in_acres?.acres === 0) {
      return `${details?.total_land_size_in_acres?.guntas} Guntas`;
    }
    if (details?.total_land_size_in_acres?.guntas === 0) {
      return `${details?.total_land_size_in_acres?.acres} Acres`;
    }
    return `${details?.total_land_size_in_acres?.acres} Acres ${details?.total_land_size_in_acres?.guntas} Guntas`;
  };

  return (
    <div className="border-2 rounded-xl">
      <ImageCarousel media={details?.land_media} />
      <div className="px-5 py-3.5">
        <div className="text-lg">
          <div>
            <span className="font-bold">
              {details?.village_name}, {details?.mandal_name}
            </span>
            <span className="inline-block px-10">
              {details?.is_basic_verified && <MdVerified />}
            </span>
          </div>
          <p className="font-bold">{details?.district_name}(dt)</p>
        </div>
        <div>
          <span className="font-bold">{getLandArea()}•</span>
          <span> ₹ {getPrice()}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
