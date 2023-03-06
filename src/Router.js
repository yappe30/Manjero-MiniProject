import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./modules/Navbar/Navbar";
import Player from "./modules/Player/container/Player";
import Contact from "./modules/Contact/container/Contact";
import About from "./modules/About/container/About";
import Score from "./modules/Score/container/Score";

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Player />} />
                <Route path="/player" element={<Player />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/score" element={<Score />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;