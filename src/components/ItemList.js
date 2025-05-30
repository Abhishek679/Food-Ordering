import { useDispatch } from "react-redux";
import { CDN_URL } from "./../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
//   console.log(items, "items");


  const dispatch = useDispatch();
  const handleItem = (cartItem) => {
    dispatch(addItem(cartItem));
  }


  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card.info?.id}
          className="p-4 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div>
              <span>{item.card.info.name}</span>
              <span> - ₹ {Math.round(item.card.info.price / 100)}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12">
            <div className="absolute justify-items-end">
                <button className="p-2 mx-10 bg-white shadow-lg rounded-lg" onClick={() => handleItem(item)}>Add +</button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt="image"
              className="w-28"
            ></img>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
