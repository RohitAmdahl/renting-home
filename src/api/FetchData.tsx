import React, { useEffect, useState } from "react";
import Card from "../components/card/Card";

interface Value {
  id: number;
  name: string;
  media: string[];
  price: string;
  description: string;
  location?: Location;
}

interface Location {
  city: string;
  country: string;
}

const FetchData = () => {
  const [data, setData] = useState<Value[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchVenues = async () => {
    const url = `https://api.noroff.dev/api/v1/holidaze/venues`;
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const resultsData: Value[] = await response.json();

      setData(resultsData);
    } catch (error) {
      console.log("There has been a problem with your fetch operation:", error);
    } finally {
      // Set loading to false
      setLoading(false);
    }
    // useEffect hook runs after the initial render
  };
  useEffect(() => {
    fetchVenues();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {data?.map((venue: Value) => {
        return (
          <div key={venue.id} className="">
            <Card key={venue.id} venue={venue} />
          </div>
        );
      })}
    </>
  );
};

export default FetchData;
