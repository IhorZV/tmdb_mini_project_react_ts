import React, {useContext} from 'react';
import {Outlet} from "react-router-dom";

import {Footer, Header} from "../components";
import {Context} from "../hoc";
import css from "./MainLayout.module.css"

const MainLayout = () => {

    const [Thema] = useContext(Context);
    console.log(Thema);
    return (
        <div className={Thema ? css.body : css.bodydark}>
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export {MainLayout};