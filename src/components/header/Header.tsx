import React from "react";
import Navbar from "./Navbar";
const Header: React.FC = () => {
  return (
    <div className="flex justify-around max-w-4xl container mx-auto font-serif">
      <Navbar />
    </div>
  );
};

export default Header;
