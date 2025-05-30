import { CDN_URL } from "./../utils/constant";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    props?.restaurant?.info;
  return (
    <div className="p-4 m-4 w-[250px] bg-gray-100 hover:bg-gray-200">
      <img
        className="res-logo"
        alt="logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>Take {sla.deliveryTime} Minutes</h4>
    </div>
  );
};

export const withPromtedLabel = () => {
    return (props) => {
        return (
            <div>
                <lebel>Promoted</lebel>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;
