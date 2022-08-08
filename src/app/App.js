import React from "react";
import HomePage from "../pages/Home";
import {Route, Routes} from "react-router-dom";
import Login from "../pages/Login";

function App() {
    return (
        <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route path='home' element={<HomePage/>}/>
        </Routes>

    );
}

export default App;
