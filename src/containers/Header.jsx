import React from "react";
import Filter from "../components/Filter";
import dateToString from "../utils/dateToString";
import classes from "./Header.module.css";

const Header = ({ data, activeFilter, setActiveFilter }) => {
  // data={data}   activeFilter={activeFilter}   setActiveFilter={setActiveFilter}
  const outboundDate = new Date(data[0].date);
  const returnDate = new Date(data[data.length - 1].date);

  return (
    <header className={classes.header}>
      <h2>Trip To:</h2>
      <h1>SLOVAKIA!</h1>
      <p>
        {/* const dateToString = (date) => { return `${day} ${month}`} */}
        {`From ${dateToString(outboundDate)} to ${dateToString(returnDate)}`}
      </p>
      <Filter filterHandler={setActiveFilter} />
    </header>
  );
};

export default Header;
