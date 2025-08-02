import React from "react";
import './Home.css';

const Home = () => {
  return (
    <div className="from">

      <h1>BOOK A HOME OULINE</h1>
      <h2>Arrival</h2>
      <input type="text" placeholder="dd-mm-yyy" className="input-field" />
      <h3>Departure</h3>
      <input type="text" placeholder="dd-mm-yyy" className="input-field" />

      <button className="btn">BOOK NOW</button>
    </div>
  );
}
export default Home;