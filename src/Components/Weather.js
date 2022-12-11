import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Weather = () => {
    const [weather, setWeather] = useState();
    const display = useSelector(selectDisplay)

    const latitude = display.capitalInfo.latlng[0]
    const longitude = display.capitalInfo.latlng[1]

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: {q: `${latitude}, ${longitude}`},
            headers: {
            'X-RapidAPI-Key': '4774374705msh29ecae3ef20421dp12a807jsn253b341c2d0c',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            setWeather(response.data)
        })
        
        .catch(function (error) {
            console.error(error);
        });
    }, [latitude, longitude])

    return (
        <div>
            {weather &&
                <table className="overview-table">
                    <tr>
                        <td>Conditions: {weather.current.condition.text}</td>
                    </tr>
                    <tr>
                        <td>Temperature: {weather.current.temp_f}</td>
                    </tr>
                    <tr>
                        <td>Feels Like:{weather.current.feelslike_f} </td>
                    </tr>
                    <tr>
                        <td>Humidity: {weather.current.humidity}</td>
                    </tr>
                    <tr>
                        <td>Wind Speed: {weather.current.wind_mph}</td>
                    </tr>
                </table>
            }
        </div>
    );
};

export default Weather;
