import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import {useState} from "react";

export default function  SearchBox(){
    const API_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]"
    const API_KEY = "8QWZLVV9UWQYBJANARJ3YD5QG"
    let getWeatherInfo = async ()=>{
        let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonResponse = await response.json();
        console.log(jsonResponse)
    }
    let [city, setCity] = useState("");

    let handleChange = (event)=>{
        setCity(event.target.value);
    };
    let handleSubmit = (event) =>{
        event.preventDefault()
        console.log(city);
        setCity("");
        getWeatherInfo()
    }
    
    return (
        <div className="searchBox">
            <h3 className="Search">Search For The Weather</h3>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" value={city} required
            onChange={handleChange}/>
            <br></br><br></br>
            <Button variant="contained" type="submit">
            Search
        </Button>
            </form>
        </div>
    )
}