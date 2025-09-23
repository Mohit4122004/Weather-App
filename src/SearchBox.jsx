import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather`;
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonRes = await response.json();
            // console.log(jsonRes);
            let result = {
                city: city,
                temp : jsonRes.main.temp,
                minTemp : jsonRes.main.temp_min,
                maxTemp : jsonRes.main.temp_max,
                humidity : jsonRes.main.humidity,
                feelsLike : jsonRes.main.feels_like,
                weather : jsonRes.weather[0].description,
            };
            // console.log(result);
            return result;
        } catch(err) {
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            // console.log(city);
            setCity("");
            let info = await getWeatherInfo();
            updateInfo(info);
        }catch(err) {
            setError(true);
        }
    }

    return (
        <div className='SearchBox'>  
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
                {error && <p style={{color:"red"}}>Place Not Found</p>}
            </form>
        </div>
    )
}