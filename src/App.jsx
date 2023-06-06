import React from "react";
import classes from "./App.module.css";
import travelData from "./assets/travel_data.json";
import Header from "./containers/Header";
import Body from "./containers/Body";
import Flight from "./components/icons/Flight";

const { data } = travelData;

function App() {
  console.log(travelData);

  return (
    <main className={classes.main}>
      {/* Esempio */}
      <Flight color="#ff88b5" />
      <Header data={data} />
      <Body data={data} />
    </main>
  );
}

export default App;
