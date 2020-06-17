import React, { useState } from 'react'

const Input = props => {
    const { value, setValue, } = props;
    const [thisValue, setThisValue] = useState(value);
    const handleChange = e => {
        setThisValue(e.target.value);
        setValue(e.target.value);
    }
    
    return (
        <div className="inputRow">
        {
            props.submitted && props.error ?
            <p className="errorText form-right">{ props.error }</p> : ''
        }
        <label className="inputLabel" htmlFor={props.name}>{props.labelText}</label>
        
        <input 
            className="inputBox"
            type={props.type} 
            name={props.name}
            placeholder={props.placeholder} 
            value={thisValue}
            onChange={ handleChange }
        />
        </div>
    )
}

export default Input
