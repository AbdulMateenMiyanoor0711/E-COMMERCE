import { BrowserRouter,Routes,Route } from "react-router-dom"
const App = () => {
  return (
    <>
   <div>
    <h1>Please Login</h1>
     <input type="text" placeholder="Please Enter Your Email Id"/>
    <input type="password" placeholder="password"/>
    <p>dont have account please register </p>
    <BrowserRouter>
    <Routes>
      <Route>
      </Route>
    </Routes>
    </BrowserRouter>
    <button>login</button>
   </div>
    
    </>
  )
}

export default App