import React, { createContext } from "react";

const FilterContext = React.createContext({
  activeFilter: null,
  // setActiveFilter: setActiveFilter,
}); //you create a Context object in the end

export default FilterContext;
