import CreateStudent from "./components/Create";
import Navbar from "./components/navabar";
import {  Route, Routes } from "react-router-dom";
import Read from "./components/read";
import Update from "./components/update";
import { useEffect } from "react";
import { useDispatch,  } from "react-redux";

import { ShowUser } from "./features/userdetailsSlice";

function App() {
  const dispatch= useDispatch();
  useEffect(() => {
      dispatch(ShowUser());
    }, [dispatch]);
  return (
    <div className="App">
      <Navbar/>
      
     
        <Routes>
          <Route path="/" element= {<CreateStudent/>}></Route>
        <Route path="/read" element={<Read/>}></Route>
        <Route path="/edit/:id" element={<Update/>}></Route>

        </Routes>
      
      
    
    </div>
  );
}

export default App;
