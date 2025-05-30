import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems, 'cartItems');
    const dispatch = useDispatch();

    const handleVlearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div>
                <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleVlearCart}>Clear Cart</button>
                {cartItems.length == 0 && <h1>Cart is empty. Please Add Item to the Cart!!!</h1>}
                <ItemList items={cartItems}></ItemList>
            </div>
        </div>
    )
}

export default Cart;