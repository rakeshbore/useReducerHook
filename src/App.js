

import React from 'react'
// import { Routes, BrowserRouter, Route,   } from "react-router-dom";
// import ProductListing from "./components/ProductList"
// import ProductDetails from './components/ProductDetails';
// import Header from './components/Header';
// import PostRedux from "./PostRequestUseThunk/PostRedux"
// import Post from './Post';
import Chield1 from './dataTransfer/Chield1';
import AllContacts from "./CrudUsingRedux/AllContacts"
import Header  from './CrudUsingRedux/Header';
import UseReducer from './UseReducerhook/UseReducer';
import Parent from './UseReducerhook/Parent';
import Searchpage from './FoodReciepeApp/Searchpage';
const App = () => {
  return (
    <div className="App">
     {/* <Searchpage/>
   <PostRedux/> */}
  
<Chield1/> 
     {/* <Header/>
   <AllContacts/>
    <UseReducer/> 
    <Parent/>
       
       <BrowserRouter>
       <Header/>
        <Routes>
          <Route path="/" exact element={<ProductListing/>} />
          <Route path="/product/:productId" exact element={<ProductDetails/>} />
          <Route>404 Not Found!</Route>
        </Routes>
        </BrowserRouter>  */}
     </div>
  
  )
}

export default App;
