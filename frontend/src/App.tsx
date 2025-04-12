
import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router"
import NewsPage from "./pages/NewsPage"
import NewsFeed from "./Components/NewsFeed/NewsFeed"
import CodesPage from "./pages/CodesPage"
import SnippetPage from "./pages/SnippetPage"
import { Comment } from "./types/CommentType"
import { User } from "./types/UserType"
import {v4 as uuidv4} from 'uuid'
import {postComment} from './api/commentsAPI'

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
        element:<SnippetPage/>,
        action:async ({ request }) => {
          const formData = await request.formData();
          const comment = formData.get("comment") as string;
          const userString = localStorage.getItem(import.meta.env.CURR_USER);
          const user:User = JSON.parse(userString as string);
          const commentObj:Comment = {id:uuidv4(), type:"snippet", author:user.nickname, publishingDate:new Date(), content:comment};
          const resp = await postComment(commentObj);
          return resp;

        }
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
