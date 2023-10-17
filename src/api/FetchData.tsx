import React, { useEffect, useState } from "react";
import Card from "../components/card/Card";
interface Value {
  id: number;
  name: string;
  media: any[];
  price: string;
  // data: any[];
}

interface ApiResponse {
  data: Value[];
}

const FetchData: React.FC = () => {
  //declare state variable for storing data and loading state
  const [data, setData] = useState<Value | null>(null);
  const [loading, setLoading] = useState(true);
  // useEffect hook runs after the initial render
  useEffect(() => {
    const url = `https://api.noroff.dev/api/v1/holidaze/venues`;
    // Define an asynchronous function fetchData using async/await syntax
    const apiCall = async () => {
      try {
        const response = await fetch(url);
        console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const resultsData: Value = await response.json();
        console.log(resultsData);
        setData(resultsData);
      } catch (error) {
        console.log(
          "There has been a problem with your fetch operation:",
          error
        );
      } finally {
        // Set loading to false, regardless of whether the fetch operation succeeds or fails
        setLoading(false);
      }
    };
    apiCall();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {data.map((venue) => {
        return (
          <>
            <div>
              <Card key={venue.id} venue={venue} />
            </div>
          </>
        );
      })}
    </>
  );
};

export default FetchData;
