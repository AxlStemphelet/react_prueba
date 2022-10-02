import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    const [age, setage] = useState(24);

    const birthday = () => {

        setage(age + 1)

    }

    return (
        <div>
        <h1>HOLA {props.name} desde componenete funcional!</h1>
        <h2>Tu edad es: { age }</h2>
        <div>
            <button onClick={birthday}>
                Cumplir Años
            </button>
        </div>
    </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;

