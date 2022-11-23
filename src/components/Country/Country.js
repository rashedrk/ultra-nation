import React from 'react';

const Country = (props) => {
    const {name,population,flags}=props.country;
    const flagStyle={width: '50px'};
    const addEventHandler=props.addEventHandler;
   // console.log(props);
    return (
        <div>
            <h1>Name: {name.common}</h1>
            <img  style = {flagStyle}src={flags.png} alt={name.common} />
            <p>Population: {population}</p>
            <button onClick={()=>addEventHandler(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;