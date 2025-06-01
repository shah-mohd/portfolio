import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Projects from "./Porojects";
import Header from "./Header";

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