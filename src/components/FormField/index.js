import React from 'react'


function FormField({text, value, onChange, nameType, type}) {

    return (
        <div>
            <label>
                {text}
                   <input
                    type={type}
                    defaultValue={value}
                    name={nameType}
                    value={value}
                    onChange={onChange}
                />
            </label>
           </div>
    );

}


export default FormField;