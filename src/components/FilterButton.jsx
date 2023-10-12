import React from "react";
import classes from "./FilterButton.module.scss";

const FilterButton = ({ clickHandler, children, isActive }) => {
  return (
    <button className={isActive ? classes.selected : ""} onClick={clickHandler}>
      {children}
    </button>
  );
};

export default FilterButton;
