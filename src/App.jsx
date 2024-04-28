import { RouterProvider } from "react-router-dom"
import UserContext from "./UserContext";
import router from "./router";
function App() {
  

  return (
    <>
    <UserContext>
       <RouterProvider router={router}/>
    </UserContext>
     
    </>
  )
}

export default App
