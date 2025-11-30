import { createBrowserRouter} from "react-router";
import Home from "../Navigation/Home";
import AboutUs from "../Navigation/AboutUs";
import BookNow from "../Navigation/BookNow";
import Contact from "../Navigation/Contact";
import Package from "../Navigation/Package";
import Tour from "../Navigation/Tour";

import MainLayout from "../Navigation/MainLayout";
import Testimonials from "../Navigation/Testimonials";
export const router = createBrowserRouter([{
path: "/",
element: <MainLayout/>,
children: [{
    path: "/", element: <Home/>
},
{
    path:"AboutUs", element: <AboutUs/>
},
{
    path:"BookNow", element: <BookNow/>
},
{
    path:"Contact", element: <Contact/>
},
{
    path:"package", element: <Package/>
},
{
    path:"tour", element: <Tour/>
},
{
    path:"testimonials", element: <Testimonials/>
}
]
}]);