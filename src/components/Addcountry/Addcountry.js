import React from 'react';

const Addcountry = (props) => {
    const addedcountry = props.addedcountry;
    // let totalPopulation = 0;
    // for (let i = 0; i < addedcountry.length; i++) {
    //     const population = addedcountry[i].population;
    //     totalPopulation += population;
        
    // }

    let totalPopulation = addedcountry.reduce((totalPopulation, addedcountry) => totalPopulation + addedcountry.population, 0);
    return (
        <div>
            <h4>Country Added: {addedcountry.length} </h4>
            <h4>Total Population: {totalPopulation} </h4>
        </div>
    );
};

export default Addcountry;