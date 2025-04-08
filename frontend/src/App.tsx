
import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router"
import NewsPage from "./pages/NewsPage"
import NewsFeed from "./Components/NewsFeed/NewsFeed"
import CodesPage from "./pages/CodesPage"
import SnippetPage from "./pages/SnippetPage"

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
      },
      {
        path: "codepage/:id",
        element:<SnippetPage/>
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
