import React from "react";
import classes from "./App.module.css";
import travelData from "./assets/travel_data.json";
import Header from "./containers/Header";
import Body from "./containers/Body";

const { data } = travelData;

function App() {
  console.log(travelData);

  return (
    <section className={classes.main}>
      <Header data={data} />
      <Body data={data} />
    </section>
  );
}

export default App;
