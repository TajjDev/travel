import { Link } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/indexPage/Index";
import Traveladvisory from "./pages/TravelAdvisoryPage/Travel-advisory";
import AboutUs from "./pages/AboutUsPage/AboutUs";


const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout/>,
        children:[
            
            {
                path:'/traveladvisory',
                element:<Traveladvisory/>
            },
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<AboutUs/>
            },
            {
                path:'*',
                element:<p style={{height:"100%", bottom:0, width:"100%", background:"white", position:"absolute",top:0,display:"flex",alignItems:"center",justifyContent:"center"}} >page not found!, go back to <Link style={{textDecoration:'none',fontWeight:'700'}} href="/">Home</Link></p>
            }
        ]
    }
])
export default router
