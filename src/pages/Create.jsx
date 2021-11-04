import React from 'react';
import NavBar from "../components/navbar/NavBar";
import CreateScreen from "../components/CreateScreen";
import Search from "../components/UI/search/Search";

const Create = () => {
    return (
        <div className={'home_wrapper'}>
            <NavBar/>
            <div className={'inner_wrapper'}>
                <Search>Create Building</Search>
                <CreateScreen/>
            </div>
        </div>
    );
};

export default Create;