import "./styles.css";
import * as React from "react";

const countries= [
    
     {name: 'India',value:'IN', cities:['Delhi', 'Mumbai']},
     {name: 'Pak',value:'PK', cities:['Lahaur', 'Karachi']},
     {name: 'United State of America',value:'US', cities:['Freshnoo', 'Dover']},
     {name: 'Nepal',value:'NP', cities:['kathmandoo', 'lusso']},
     {name: 'China',value:'CN', cities:['Bijing', 'Rusato']},

     
  ]

export default function App() {
  const [country, setCountry] = React.useState({name:"", value:"",cities:[]});
//   const [selectedState, setSelectedState] = React.useState();
//   const [selectedCity, setSelectedCity] = React.useState();

//   const availableState = data.countries.find((c) => c.name === selectedCountry);
//   const availableCities = availableState?.states?.find(
//     (s) => s.name === selectedState
//   );

  return (
    <div id="container">
        <select 
        value={country}
        onChange={(e) => {
            console.log(e.target.value)
            setCountry(e.target.value)
        }}>
            {countries.map((item, i) =>{
                return (<option value={i}>{item.name}</option>)
            })}
        </select>

        <select 
        value={country}
        onChange={(e) => {
            console.log(e.target.value)
            setCountry(e.target.value)
        }}>
            {countries[country].cities.map((item, i) =>{
                return (<option value={i}>{item}</option>)
            })}
        </select>
    </div>
  );
}
