import React from "react";
import classes from "./Body.module.css";
import dateToString from "../utils/dateToString";

const Body = ({ data }) => {
  return (
    <div className={classes.dates}>
      {data.map((elem) => {
        const elemDate = new Date(elem.date);

        return (
          // la key va messa all'elem piu esterno
          <section key={elem.id}>
            <button>{dateToString(elemDate)}</button>
          </section>
        );
      })}
    </div>
  );
};

export default Body;
