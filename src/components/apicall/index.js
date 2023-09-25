import "./styles.css";
import React, { useState, useEffect } from "react";
export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);

//   const renderedItems = [];
//   for (let i = 0; i < 5 && i < data.length; i++) {
//     renderedItems.push(
//       <tr key={data[i].id}>
//         <td>{data[i].username}</td>
//         <td>{data[i].address.geo.lat}</td>
//         <td>{data[i].address.geo.lng}</td>
//       </tr>
//     );
//   }
  return (
    <div className="App">
      {data.slice(0, 5).map((val, i) => {
        return (
          <div>
            <div className="row" key ={i}>
            <table>
              <thead>
                <tr>
                    <th>username</th>
                    <th>Lat</th>
                    <th>Lng</th>
                </tr>
              </thead>
              <tbody>
                 <tr key={i}>
                    <td>{val.username}</td>
                    <td>{val.address.geo.lat}</td>
                    <td>{val.address.geo.lng}</td>
                 </tr>
              </tbody>
            </table>
              <h1 >user id:{val.username}</h1>
              <h2 >lat:{val.address.geo.lat}</h2>
              <h2 >lang:{val.address.geo.lng}</h2>
            </div>
          </div>
        );
      })}

      {/* <div>
        <h1>Data Table</h1>
         <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Lat</th>
              <th>Lng</th>
            </tr>
          </thead>
          <tbody>{renderedItems}</tbody>
        </table>
      </div> */}
      {/* <div>
        <h1>Data Table</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Lat</th>
              <th>Lng</th>
            </tr>
          </thead>
          <tbody>{renderedItems}</tbody>
        </table>
      </div> */}
    </div>
  );
}