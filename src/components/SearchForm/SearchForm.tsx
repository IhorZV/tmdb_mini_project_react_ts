import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {joiResolver} from "@hookform/resolvers/joi";

import {ISearch} from "../../interfaces";
import css from "./SearchForm.module.css"
import {FormValidator} from "../../validators";

const SearchForm = () => {

    const {reset, handleSubmit, register, watch, formState:{errors}} = useForm<ISearch>({
        mode: "all",
        resolver: joiResolver(FormValidator)
    });
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
            {errors.name && <div>{errors.name.message}</div>}
        </form>
    );
};

export {SearchForm};