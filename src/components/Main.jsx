import { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [rockets, setRockets] = useState([]);
  const [rocketsError, setRocketsError] = useState(null);
  const [ships, setShips] = useState([]);
  const [shipsError, setShipsError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [selectOption, setSelectOption] = useState("all");

  useEffect(() => {
    // Fetch data from the SpaceX Rockets API
    axios
      .get("https://api.spacexdata.com/v3/rockets")
      .then((response) => {
        setRockets(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setRocketsError(error); // Set the error state
        console.error("Error fetching rocket data:", error);
      });

    // Fetch data from the SpaceX Ships API
    axios
      .get("https://api.spacexdata.com/v3/ships")
      .then((response) => {
        setShips(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setShipsError(error); // Set the error state
        console.error("Error fetching capsule data:", error);
      });
  }, []);

  // Function to handle the search input change
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle the select input change
  const handleOptionChange = (event) => {
    setSelectOption(event.target.value);
  };

  // Filter rockets based on the search term and selected option
  const filteredRockets = rockets.filter((rocket) => {
    const nameMatch = rocket.rocket_name.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectOption === "all" || selectOption === "rockets") {
      return nameMatch && !rocketsError; // Check if there's no error for rockets data
    }

    return false;
  });

  // Filter ships based on the search term and selected option
  const filteredShips = ships.filter((ship) => {
    const nameMatch = ship.ship_name.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectOption === "all" || selectOption === "ships") {
      return nameMatch && !shipsError; // Check if there's no error for ships data
    }

    return false;
  });

  return (
    <div className="main-container my-10">
      <div className="flex flex-col items-center gap-4 mt-20 mb-6 mx-7 border rounded-2xl font-bold">
        <div className="form flex gap-5 my-5 items-center">
          <div>
            <label htmlFor="">Select by category:  </label>
            <select className="border rounded-lg" value={selectOption} onChange={handleOptionChange}>
              <option value="all">All</option>
              <option value="rockets">Rockets</option>
              <option value="ships">Ships</option>
            </select>
          </div>
          <input
            type="text"
            className="border px-3 py-1 rounded-xl"
            placeholder="Search by name..."
            value={searchTerm} // Bind the input value to the state
            onChange={handleSearchInputChange} // Handle input change
          />
        </div>
      </div>

      <h1 className="text-start text-3xl font-bold mb-4 mx-12">SpaceX Rockets</h1>
      <div className="card-container">
        {filteredRockets.map((item) => (
          <div className="rocket-card" key={item.rocket_id}>
            <img src={item.flickr_images[0]} alt="Rocket-Images" />
              <div className="rocket-details">
                <h2 className="font-bold text-xl">{item.rocket_name}</h2>
                <a href={item.wikipedia} className="" target="_blank">More Detail</a>
                <p className="overflow-hidden text-gray-500 text-start px-2">{item.description}</p>
              </div>
          </div>
        ))}
      </div>

      <h1 className="text-start text-3xl font-bold mt-16 mx-12">SpaceX Ships</h1>
      <div className="card-container mt-5">
        {filteredShips.map((item) => (
          <div className="ship-card" key={item.ship_id}>
            <img src={item.image} alt="Ships-images" />
              <div className="ship-details">
                <h2 className="font-bold text-xl">{item.ship_name}</h2>
                <a href={item.url} target="_blank">More Detail</a>
                <div>
                <p className="overflow-hidden text-gray-500 text-start px-2">Home Port : {item.home_port}</p>
                <p className="overflow-hidden text-gray-500 text-start px-2">Ship Id : {item.ship_id}</p>
                </div>
              </div>  
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;