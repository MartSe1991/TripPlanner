import React, { useContext } from "react";
import Flight from "./icons/Flight";
import Train from "./icons/Train";
import Coach from "./icons/Coach";
import Stay from "./icons/Stay";
import Event from "./icons/Event";
import FilterButton from "./FilterButton";
import classes from "./FilterButton.module.css";
import FilterContext from "../context/filter_status";

const Filter = () => {
  const { activeFilter, setActiveFilter } = useContext(FilterContext);
  // activeFilter={activeFilter} filterHandler={setActiveFilter}

  // chiamiamo setFilter ogni volta che un filtro viene scelto.
  // setFilter chiama il setter dello state definito in App.jsx che
  // determina il filtro attivo, il cui getter é activeFilter.
  // Quando settiamo il filtro attivo peró, vogliamo prima controllare
  // che il filtro che vogliamo settare non sia giá attivo.
  // Per fare ció, controlliamo con un'operatore ternario se il
  // filtro attivo non sia uguale a quello che vogliamo settare.
  // Se lo é, allora settiamo il filtro come null.

  // in qualsiasi momento questa funzione venga chiamata, verifico che il valore corrente di activeFilter
  // IN QUELL'ESATTO MOMENTO non sia giá uguale al valore del filtro che voglio settare.
  // Se lo é, il filtro attivo viene settato come null, altrimenti assume il valore che voglio settare.
  const setFilter = (type) => {
    setActiveFilter(activeFilter === type ? null : type); // per disattivare il filtro
  };

  //mappa filterelements ad ogni iterazione renderizza struttura qui sotto - utilizzando type e content al posto dei valori specifici

  const filterElements = [
    {
      type: "Flight",
      content: <Flight />,
    },
    {
      type: "Train",
      content: <Train />,
    },
    {
      type: "Coach",
      content: <Coach />,
    },
    {
      type: "Apartment",
      content: <Stay />,
    },
    {
      type: "Event",
      content: <Event />,
    },
  ];

  return (
    <div className={classes.icons}>
      <div>Filter:</div>
      {filterElements.map((elem, key) => {
        return (
          <FilterButton
            key={`Filter-${key}`}
            isActive={activeFilter === elem.type}
            clickHandler={() => {
              setFilter(elem.type);
            }}
          >
            {elem.content}
          </FilterButton>
        );
      })}
    </div>
  );
};

export default Filter;
