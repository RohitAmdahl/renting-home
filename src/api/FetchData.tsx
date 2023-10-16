import { Items } from "../helpers/type";

export const FetchData = async (): Promise<Items[]> => {
  const response = await fetch(`https://api.noroff.dev/api/v1/holidaze/venues`);
  if (!response.ok) {
    throw new Error("Data could not be fetched. Status: " + response.status);
  }
  const data: Items[] = await response.json();
  console.log(data);
  return data;
};

export default FetchData;
