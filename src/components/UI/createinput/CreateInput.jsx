import React from 'react';
import classes from './CreateInput.module.css'

const CreateInput = ({params}) => {
    return (
        params.map((item, index) =>
            <div className={classes.createInput} key={index + 1}>
                <label>{item.text}</label>
                <input type={item.type}/>
                {item.optional ? <p>*Optional</p> : ""}
            </div>
        )
    );
};

export default CreateInput;