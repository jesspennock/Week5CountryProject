import { current } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";
const Overview = ()=> {
    const currentDisplay = useSelector(selectDisplay)
    return(
        <div className = "stack">
            <h1>{currentDisplay.name.official}</h1>
            <h2>{currentDisplay.name.common}</h2>
            <table className="overview-table">
                <tr>
                    <td>Continent:</td>
                    <td>{currentDisplay.continents}</td>
                </tr>
                <tr>
                    <td>Capital City:</td>
                    <td>{currentDisplay.capital}</td>
                </tr>
                <tr>
                    <td>Languages:</td>
                    <td>
                        {Object.keys(currentDisplay.languages).map((key)=>{
                            return currentDisplay.languages[key] + " "
                        })}
                    </td>
                </tr>
                <tr>
                    <td>Population:</td>
                    <td>{currentDisplay.population}</td>
                </tr>
            </table>
            </div>
    )
}

export default Overview;