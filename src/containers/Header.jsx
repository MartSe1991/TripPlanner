import React from "react";
import Filter from "../components/Filter";
import dateToString from "../utils/dateToString";
import classes from "./Header.module.css";

const Header = ({ data }) => {
  const outboundDate = new Date(data[0].date);
  const returnDate = new Date(data[2].date);

  return (
    <header className={classes.header}>
      <h2>Trip To:</h2>
      <h1>SLOVAKIA!</h1>
      <p>
        {`From ${dateToString(outboundDate)} to ${dateToString(returnDate)}`}
      </p>
      <Filter />
    </header>
  );
};

export default Header;
