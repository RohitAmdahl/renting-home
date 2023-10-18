import FetchData from "../api/FetchData";

// import FetchData from "../api/FetchData";
const HomePage = () => {
  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 md:grid-cols-2 container mx-auto max-w-5xl lg:gap-5 m-8 p-5">
      <FetchData />
    </div>
  );
};

export default HomePage;
