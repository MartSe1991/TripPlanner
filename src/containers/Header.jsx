import React from "react";
import Filter from "../components/Filter";

const Header = ({ data }) => {
  return (
    <div>
      <h3>Trip to:</h3>
      <h1>Slovakia!</h1>
      <p> {`From ${data[0].date} to ${data[2].date}`}</p>
      <Filter />
    </div>
  );
};

export default Header;
