import React from "react";
import { Carousel } from "react-responsive-carousel";
import noImg from "../../assets/logo.png";
import { Link } from "react-router-dom";
interface Venue {
  id: number;
  name: string;
  media: any[];
  price: string;
  description: string;
  // location: {};
  // ... other properties
}

interface CardProps {
  venue: Venue;
}

const Card: React.FC<CardProps> = ({ venue }) => {
  console.log(venue);
  const {
    media,
    name,
    id,
    price,
    // location: { country, city },
  } = venue;
  return (
    <div className=" container max-w-4xl mx-auto font-Montserrat">
      <div className=" overflow-hidden ">
        {media.length > 0 ? (
          <Carousel showStatus={false} showThumbs={false}>
            {media.map((imageUrl, index) => (
              <div key={`media-${index}`}>
                <img
                  className="object-cover border-2 mx-auto rounded-2xl h-52"
                  src={imageUrl}
                  alt={name}
                />
              </div>
            ))}
          </Carousel>
        ) : (
          <img
            className="object-cover border-2 mx-auto rounded-2xl h-52 lg:p-10 sm:p-14 md:p-8 xs:p-8"
            src={noImg}
            alt={name}
          />
        )}
      </div>
      <Link to={`/venues/${id}`}>
        <div className="mt-1 p-2 hover:text-blue hover:underline cursor-pointer ">
          <h2 className="text-slate-700 font-semibold capitalize"> {name} </h2>
          {/* <p className="text-slate-700 mt-1 text-sm flex gap-1 items-center ">
              {country}, {city}
            </p> */}

          <div className="mt-3 flex items-end justify-between">
            <p>
              <span className="text-lg font-bold text-blue">${price}</span>
              <span className="text-blue text-sm">/night</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
