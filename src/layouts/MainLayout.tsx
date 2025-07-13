import React from 'react';
import {Outlet} from "react-router-dom";

import {Footer, Genres, Header} from "../components";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MainLayout};