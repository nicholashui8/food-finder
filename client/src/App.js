import React from 'react';
import Select from './components/Select'
import Results from './components/Results';
import './App.css';

class App extends React.Component {
  state = {
    results: [],
  }

  clientData = (searchPreference) => {
    if('geolocation' in navigator){
      console.log('we can track you!');

      navigator.geolocation.getCurrentPosition(async position =>{
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        console.log('Title ' + searchPreference.title);
        console.log('Price ' + searchPreference.price);
        console.log('Radius ' + searchPreference.radius);

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const term = searchPreference.title;
        const price = searchPreference.price;
        const radius = searchPreference.radius;

        //data object we are passing to the backend
        const data = {
            lat,
            lon,
            term,
            price,
            radius
        };

        //(object) second parameter of fetch that allows you to change settings
        const options = {
            method: 'POST', //post, we are sending data to server
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) //data contains the info we are sending to server
        };
        //fetch can also send data
        //fetch sends data to server, also recieves data. Recived data is in response
        const response = await fetch('/api', options);
        
        const jsonData = await response.json();
        let restaurantData = [];
        for(let i = 0; i < 5; i++){
          //create array containing all restruant data
          restaurantData.push(jsonData.jsonBody.businesses[i]);
          console.log(jsonData.jsonBody.businesses[i].name  + jsonData.jsonBody.businesses[i].phone);
        }
        //change state by changing array
        
        this.setState({
          results: restaurantData.slice(),
        });
      });
    }
    else{
      console.log('Cant see your location');
    }
  }
  
  render(){
    return (
    <div className="App">
      <Select clientData={this.clientData}/>
      <Results restaurants={this.state.results}/>
    </div>
    );
  }
  
}

export default App;
