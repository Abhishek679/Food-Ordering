import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
// import About from './components/About';
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Restaurant from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import appStore from "./utils/AppStore";
import Cart from "./components/Cart";


const About = lazy(() => import('./components/About'));

const App = () => {
    return (
      <Provider store={appStore}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </Provider>
    );
}

const appRoouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
            },
            {
                path:'/contactus',
                element: <ContactUs />
            },
            {
                path: '/restaurant/:resId',
                element: <Restaurant />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<App />);
root.render(<RouterProvider router={appRoouter} />);
