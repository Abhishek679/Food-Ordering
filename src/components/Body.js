import RestaurantCard, { withPromtedLabel } from "./restaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./shimmer";

export const Body = () => {
  const [resList, setResList] = useState([]);
  const [filredRestaurant, setFilredRestaurant] = useState([]);
  const [searchText, getSearchText] = useState([]);

  const RestaurantwithPromtedLabel = withPromtedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9880043&lng=77.6893675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // add ? mark, called a option chaining
    // Optional Chaining
    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Rendering
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              getSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filterRestaurant = resList.filter((item) =>
                item.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilredRestaurant(filterRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
            onClick={() => {
              const filter = resList.filter((item) => item.info.avgRating > 4);
              setResList(filter);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filredRestaurant.map((item) => (
          <Link
            key={item.info.id}
            to={"/restaurant/" + item?.info?.id}
          >
            {
            item?.info?.promoted ? (
                <RestaurantwithPromtedLabel restaurant={item}/>
            ) : (
                <RestaurantCard restaurant={item} />
            ) 
        }
          </Link>
        ))}
      </div>
    </div>
  );
};
