import React from "react";
import HomePage from "../pages/Home";
import {Route, Routes} from "react-router-dom";
import SignUp from "../pages/SignUp";

function App() {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route path='home' element={<HomePage/>}/>
            <Route path='signUp' element={<SignUp/>}/>
        </Routes>

    );
}

export default App;
