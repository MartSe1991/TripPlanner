import React, { useState } from "react";
import classes from "./App.module.scss";
import travelData from "./assets/travel_data.json";
import Header from "./containers/Header";
import Body from "./containers/Body";
import FilterContext from "./context/filter_status";

const { data } = travelData;

function App() {
  const [activeFilter, setActiveFilter] = useState(null); // creo usestate per identificare stato corrente del filtro e per settarlo

  console.log(travelData);

  return (
    <FilterContext.Provider
      value={{ activeFilter: activeFilter, setActiveFilter: setActiveFilter }}
    >
      <main className={classes.main}>
        <Header data={data} />
        <Body data={data} />
      </main>
    </FilterContext.Provider>
  );
}

export default App;
