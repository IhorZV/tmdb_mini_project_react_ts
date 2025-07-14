import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {ISearch} from "../../interfaces";
import css from "./SearchForm.module.css"

const SearchForm = () => {

    const {reset, handleSubmit, register, watch} = useForm<ISearch>();
    const navigate = useNavigate();
    const nameValue = watch("name");
    const save: SubmitHandler<ISearch> = (data) => {
        navigate(`/search/${data.name}`);
        reset()
    }


    return (
        <form onSubmit={handleSubmit(save)} className={css.searchForm}>
            <input type="text" placeholder={"Search..."} {...register("name")}/>
            <button disabled={!nameValue || nameValue.trim() === ""}>Go</button>
        </form>
    );
};

export {SearchForm};