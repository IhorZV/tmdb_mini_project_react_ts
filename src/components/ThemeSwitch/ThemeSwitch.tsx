import React, {useContext} from 'react';

import css from "./ThemaSwitch.module.css"
import {Context} from "../../hoc";

const ThemeSwitch = () => {

    const [Thema,setThema] = useContext(Context);


    const Change = (e:React.ChangeEvent<HTMLInputElement>):void=>{
        setThema(e.target.checked);
    }

    return (
        <label className={css.switch}>
            <input type="checkbox" onChange={Change}/>
            <span className={css.slider}/>
        </label>
    );
};

export {ThemeSwitch};
