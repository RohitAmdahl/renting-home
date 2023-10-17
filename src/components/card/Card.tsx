import React from "react";
interface Venue {
  id: number;
  name: string;
  media: any[];
  price: string;
  description: string;
  location: {};
  // ... other properties
}

interface CardProps {
  venue: Venue;
}

const Card: React.FC<CardProps> = ({ venue }) => {
  console.log(venue);
  const {
    name,
    description,
    price,
    location: {},
  } = venue;
  return (
    <div className="max-w-4xl container mx-auto p-2 m-2">
      <h1 className="font-bold"> {name} </h1>
      <p> {description} </p>
      <p> {price} </p>
    </div>
  );
};

export default Card;
