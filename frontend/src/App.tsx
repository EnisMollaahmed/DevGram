
import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router"
import NewsPage from "./pages/NewsPage"
import NewsFeed from "./Components/NewsFeed/NewsFeed"

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>, 
    children:[
      {
        index:true,
        element:<NewsFeed/>
      }
    ]
  },
  {
    path:'newspage/:id',
    element:<NewsPage/>
  }
])

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
