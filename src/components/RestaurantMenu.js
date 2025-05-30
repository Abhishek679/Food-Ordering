import React, { useEffect, useState } from "react";
import mockData from "../utils/mockData";
import Shimmer from "./shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";

const Restaurant = () => {
  const [ showIndex, setShowIndex ] = useState(0);
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9880043&lng=77.6893675&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonData = await data.json();
    jsonData ? setResInfo(jsonData) : setResInfo(mockData);
  };

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card.card.info;
  const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item.card.card.hasOwnProperty('itemCards'))
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.categoryId}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default Restaurant;
