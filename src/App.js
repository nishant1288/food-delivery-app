import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from './components/header/Header';
import Body from './components/body/Body';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Error from './components/error/Error';
import RestaurantCard from './components/restaurant-card/RestaurantCard';
import AboutClass from './components/about/AboutClass';
import UserClassApi from './components/userclassapi/UserClassApi';
import Cart from './components/cart/Cart';
// import Groceries from './components/groceries/Groceries';

const Groceries = lazy(() => import("./components/groceries/Groceries"))

const App = () => {
    // console.log(<Body />)
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/aboutclass',
                element: <AboutClass />
            },
            {
                path: '/userclassapi',
                element: <UserClassApi />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:restid',
                element: <RestaurantCard />
            },
            {
                path: '/groceries',
                element: (<Suspense fallback={<h2>Loading ...</h2>} ><Groceries /></Suspense>)
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ],
        errorElement: <Error />
    }

    // {
    //     path: '*',
    //     element: <Error />
    // }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />)