
import { createBrowserRouter, RouterProvider } from "react-router"

import Home from "./pages/Home"
import NewsPage from "./pages/NewsPage"
import CodesPage from "./pages/CodesPage"
import SnippetPage from "./pages/SnippetPage"

import NewsFeed from "./Components/NewsFeed/NewsFeed"

import {v4 as uuidv4} from 'uuid'

import {deleteComment, postComment} from './api/commentsAPI'
import { putUser } from "./api/userAPI"

import { Comment } from "./types/CommentType"
import { User } from "./types/UserType"
import { ErrorMessage } from "./types/ErrorMessage"
import { Message } from "./types/Message"
import ProfilePage from "./pages/ProfilePage"
import MyCodes from "./Components/ProfilePageComponets/MyCodes/MyCodes"

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
          user.idOfCommentsOfCodes.push(commentObj.id);
          const commentResp = await postComment(commentObj);
          const userResp = await putUser(user);
          if(!('error' in commentResp) && 'error' in userResp){
            await deleteComment(commentObj.id);
            return {error:"Could not add the comment"} as ErrorMessage
          }
          return {message: "The comment has been posted succesfully"} as Message;
        }
      },
      {
        path: 'my-profile',
        element:<ProfilePage/>,
        children:[
          {
            index:true,
            path:'codes',
            element:<MyCodes/>
          }
        ]
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
