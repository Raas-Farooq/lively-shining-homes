import { BrowserRouter,Routes, Route } from "react-router-dom";
import React from "react";
import App from "./App";
import About from "./about";
import Detail from "./detail";

const AppRoutes = () => {
    

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="about" element={<About />} />
                <Route path="detail" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes