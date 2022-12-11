import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";

const OptionDisplay = () => {
    const dispatch = useDispatch()
    const currentPotentials = useSelector(selectPotentials)
    console.log(currentPotentials)
    return (
        <div className="stack">
            {currentPotentials.map((country, index)=> {
                return (
                    <h2 onClick = {() =>{
                        dispatch(setDisplayCountry(currentPotentials[index]))
                    }}
                    >
                        {country.name.common}
                    </h2>
                )
            })}
            {/* {currentPotentials.map((country) => <h2>{country.name.common}</h2>)} */}
        </div>
    )
};

export default OptionDisplay;
