import React from "react";
import HomePage from "../pages/Home";
import Login from "../pages/session/Login";
import {Route, Router} from "react-router-dom";
import NotFound from "../pages/session/NotFound";
import FlexBoxLayout from "../pages/Layouts/FlexBox";
import GridLayout from "../pages/Layouts/Gird";
import Posts from "../../src/pages/Posts";

function App() {
    return (
        <Router>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='posts' element={<Posts/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='flex-layout' element={<FlexBoxLayout/>}/>
            <Route path='grid-layout' element={<GridLayout/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Router>

    );
}

export default App;
