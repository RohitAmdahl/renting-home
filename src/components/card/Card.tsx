import React from "react";
interface Venue {
  id: number;
  name: string;
  media: any[];
  price: string;
  // ... other properties
}

interface CardProps {
  venue: Venue;
}
const Card: React.FC<CardProps> = ({ venue }) => {
  return <div> {venue.id} </div>;
};

export default Card;
