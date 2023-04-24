import React, { useEffect, useState } from "react";
import "./App.css";

export const SolOne = ({ fetchOne }) => {
    const [weather, setWeather] = useState({
        loading: true,
        weatherData: {},
        degree: "°C",
        temp: 0,
        toggle: false,
        buttonText: "Switch To Fahrenheit",
    });
    const getTemperature = async () => {
        try {
            const response = await fetchOne("https://example.com/api/weather");
            const { status, data } = response;
            if (status === 200) {
                setWeather((weather) => ({
                    ...weather,
                    loading: false,
                    weatherData: response.data,
                    temp: response.data.temperature,
                }));
            }
        } catch (e) {
            console.log(e);
        }
    };

    const toggleTemperature = (e) => {
        const currTemp = weather.temp;
        const tempToDegC = currTemp;
        const tempToDegF = (currTemp * 9) / 5 + 32;
        setWeather((weather) => ({
            ...weather,
            toggle: !weather.toggle,
        }));
        if (!weather.toggle) {
            e.target.textContent = "Switch To Celsius";
            weather.weatherData.temperature = tempToDegF.toFixed(0);
            setWeather((weather) => ({
                ...weather,
                degree: "°F",
            }));
        } else {
            e.target.textContent = "Switch To Fahrenheit";
            weather.weatherData.temperature = tempToDegC;
            setWeather((weather) => ({
                ...weather,
                degree: "°C",
            }));
        }
    };

    useEffect(() => {
        // getTemperature();
    }, []);

    return (
        <React.Fragment>
            <h2>Solution 1</h2>
            <h3>{weather.loading && "Loading..."}</h3>
            <div style={{ display: weather.loading ? "none" : "block" }}>
                <h3>Weather</h3>
                <div>
                    <p>
                        Temperature: {weather.weatherData.temperature}
                        {weather.degree}
                    </p>
                    <p>Humidity: {weather.weatherData.humidity}%</p>
                    <p>Wind Speed: {weather.weatherData.windSpeed} km/h</p>
                </div>
                <button onClick={(e) => toggleTemperature(e)}>
                    {weather.buttonText}
                </button>
            </div>
            <hr />
        </React.Fragment>
    );
};
