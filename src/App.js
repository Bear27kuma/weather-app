import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "6051da97b1c1968c8cfe8dbf5d7f91d3";

class App extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    description: undefined,
    icon: undefined,
    temperature: undefined,
    humidity: undefined,
    speed: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if (data.message) {
      this.setState({
        city: undefined,
        country: undefined,
        description: undefined,
        icon: undefined,
        temperature: undefined,
        humidity: undefined,
        speed: undefined,
        error: "City not found."
      });
    }else if (data) {
      const iconcode = data.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${iconcode}@2x.png`;
      this.setState({
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        icon: iconUrl,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        speed: data.wind.speed,
        error: ""
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        description: undefined,
        icon: undefined,
        temperature: undefined,
        humidity: undefined,
        speed: undefined,
        error: "Please enter the value."
      });
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-12 col-md-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    icon={this.state.icon}
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    speed={this.state.speed}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};





export default App;