import { useState } from "react"
import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"

export default function weatherApp() {
    const [winfo , setInfo] = useState({
        city: "jabalpur",
        feelsLike: 34.52,
        humidity: 75,
        maxTemp: 29.33,
        minTemp: 29.33,
        temp: 29.33,
        weather: "scattered clouds"
    });

    let updateInfo = (result) => {
        setInfo(result);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={winfo}/>
        </div>
    )
}