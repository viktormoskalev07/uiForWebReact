import React from 'react';
import classes from './Search.module.css'

const Search = ({children, ...props}) => {
    return (
        <div className={classes.search}>
            <h1>{children}</h1>
            <form action="">
                <input type="search" placeholder={'Search...'}/>
                <button type={'submit'}></button>
            </form>
        </div>
    );
};

export default Search;