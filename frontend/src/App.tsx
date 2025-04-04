
import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router"
import NewsPage from "./pages/NewsPage"
import NewsFeed from "./Components/NewsFeed/NewsFeed"
import CodesPage from "./pages/CodesPage"

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>, 
    children:[
      {
        index:true,
        element:<NewsFeed/>
      },
      {
        path:'newspage/:id',
        element:<NewsPage/>
      },
      {
        path:'codes',
        element:<CodesPage/>
      }
    ]
  },
])

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
