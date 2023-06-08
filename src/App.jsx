import React, { useState } from "react";
import classes from "./App.module.css";
import travelData from "./assets/travel_data.json";
import Header from "./containers/Header";
import Body from "./containers/Body";

const { data } = travelData;

function App() {
  const [activeFilter, setActiveFilter] = useState(null); // creo usestate per identificare stato corrente del filtro e per settarlo

  console.log(travelData);

  // Il component ritorna un Header e un Body
  return (
    <main className={classes.main}>
      {/* Esempio */}
      <Header
        data={data}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <Body data={data} />
    </main>
  );
}

export default App;
