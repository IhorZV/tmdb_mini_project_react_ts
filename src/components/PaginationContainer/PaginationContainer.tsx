import React, {FC, PropsWithChildren} from 'react';
import {useSearchParams} from "react-router-dom";
import Pagination from "rc-pagination";
import 'rc-pagination/assets/index.css';


import css from "./PaginationContsainer.module.css"

interface IProps extends PropsWithChildren {

}

const PaginationContainer: FC<IProps> = () => {

    const [query, setQuery] = useSearchParams({ page: '1' });

    const onPageChange = (newPage: number) => {
        setQuery(prev => {
            prev.set('page', newPage.toString());
            return prev;
        });
    };

    const page = +query.get('page') || 1;
    return (
        <div className={css.pagination}>
            <Pagination
                current={page}
                total={10000}
                pageSize={20}
                onChange={onPageChange}
                prevIcon="prev"
                nextIcon="next"
            />
        </div>
    );
};

export {PaginationContainer};