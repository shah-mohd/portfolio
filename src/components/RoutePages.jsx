import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Projects from "./Porojects";
import Header from "./Header";
import Contact from "./Contact";
import Slider from "./Slider"
import Slider02 from "./Slider02";
import Academic from "./Academic";

const RoutePages = ()=> {
    return(
        <div>
            <RouterProvider router={appRouter}>
                {/* <Header/>
                <Outlet/> */}
            </RouterProvider>
        </div>

    )
}



const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
    
    },
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/about',
        element:<About />
    },
    {
        path:'/projects',
        element:<Projects/>
    },
    {
        path:'/contact',
        element:<Contact/>
    },
    {
        path:'/academic',
        element:<Academic />
    }
    
]);

// const appRouter = createBrowserRouter([
//     {
//         path:'/',
//         element:<Home/>,
    
//     children:[
//     // {
//     //     path:'/home',
//     //     element:<Home/>
//     // },
//     {
//         path:'/about',
//         element:<About />
//     },
//     {
//         path:'/projects',
//         element:<Projects/>
//     }
//     ],
// }
    
// ]);


export default RoutePages;