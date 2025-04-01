
import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router"
import NewsPage from "./pages/NewsPage"

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>, 
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
