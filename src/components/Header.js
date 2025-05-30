import { useState, useContext } from 'react';
import { LOGO_URL } from './../utils/constant';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';


export const Header = () => {
    const {loggedInUser} = useContext(UserContext);
    const [btnNameReact, getBtnNameReact] = useState('Login');

    // Subscribe to the store using a selector
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems);

    return (
      <div className="flex justify-between shadow-lg">
        <div className="logo-container">
          <img className="w-24" src={LOGO_URL} />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-4">
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li className="px-4 font-bold text-xl cursor-pointer">
              <Link to="/cart">Cart - ({cartItems.length} items)</Link>
            </li>
            <button
              className="login"
              onClick={() => {
                btnNameReact == "Login"
                  ? getBtnNameReact("Logout")
                  : getBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
            <li className="p-2 h-10 w-10 justify-center bg-slate-500 rounded-full">
              {loggedInUser}
            </li>
          </ul>
        </div>
      </div>
    );
}