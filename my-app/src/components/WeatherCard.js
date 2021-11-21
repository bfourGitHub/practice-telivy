import React from 'react';
import moment from 'moment';
// import App from '../App';
// import Moment from 'react-moment';




// function WeatherCard() {
    
    
    
    
    // componentDidMount() {
        // let apiKEY = "ad269f335fe283efea967260b3287c51";
        // let time = moment();
        // let dayAbb = time.format('ddd');
        // let weatherRequest = `api.openweathermap.org/data/2.5/forecast?q=London,us&units=imperial&mode=xml&appid=${apiKEY}`;



        // fetch(
        //     "https://api.openweathermap.org/data/2.5/onecall?lat=51.50853&lon=-0.12574&exclude={part}&appid=ad269f335fe283efea967260b3287c51"
        // )
        // .then((res) => res.json())
        // .then((json) => {
        //     this.setState({
        //         items: json,
        //         DataisLoaded: true
        //     })
        // })
            // console.log("taylor swift", time, dayAbb)
                    
    // };
    //     render(){
                    
    //         return(
    //             "hello world"
    //         )
    //     };
                
                
            
        
// }
class WeatherCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          isLoaded: false,
          items: [],
      };
    }
  
    componentDidMount() {
      fetch("https://api.openweathermap.org/data/2.5/onecall?lat=51.50853&lon=-0.12574&exclude={part}&units=imperial&appid=ad269f335fe283efea967260b3287c51")
        .then(res => res.json())
        .then(json => {
            this.setState({
              isLoaded: true,
              items: json,
            }) 
          });
        
    }
  
    render() {
      
        var time = moment().add(4, "days");
        var dayAbb = time.format('ddd');
        var { isLoaded, items } = this.state;
        // var iconCode = items.daily[1].weather[0].icon;

        if (!isLoaded) {
            return<div>Loading...</div>;
        }else {

            console.log(this.state);
            
            return (

                <div className="weatherCard">
                    <div className="card-body">
                        <h4 className="card-title" >{dayAbb}</h4>
                        <img src="http://openweathermap.org/img/wn/01d.png" alt=""></img>
                        <div>

                            <h3>{Math.round(items.daily[0].temp.max)}</h3>
                            <h3>{Math.round(items.daily[0].temp.min)}</h3>

                        </div>

                    </div>
                    {/* <ul> */}
                        {/* {items.map(item => ( */}
                            {/* <li key={items.id}>
                                {dayAbb} {items.daily[1].weather[0].icon} {Math.round(items.daily[0].temp.max)} {Math.round(items.daily[0].temp.min)}
                                
                            </li> */}
                        {/* ))}; */}
                    {/* </ul> */}
                </div>
        );
    }
      }
    }

    
    export default WeatherCard;
    //make api call with imperial units, 5 day forecast
    //then get each piece of required information (3 letter day, icon, high then low)
    //map thru the five day forcast 