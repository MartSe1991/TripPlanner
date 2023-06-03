import React from "react";
import "./App.css";
import travelData from "./assets/travel_data.json";
import Header from "./containers/Header";
import Body from "./containers/Body";

const { data } = travelData;

function App() {
  console.log(travelData);

  return (
    <React.Fragment>
      <Header data={data} />
      <Body data={data} />
    </React.Fragment>
  );
}

export default App;
