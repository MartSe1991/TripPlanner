import React from "react";
import classes from "./Body.module.css";
import dateToString from "../utils/dateToString";

const Body = ({ data }) => {
  // data ha inizialmente questo formato:

  // data: {
  //   {id: 1, category: 'trip', type: 'Flight', date: '2023-08-10', where: 'Roma Fiumicino', …}
  //   {id: 2, category: 'trip', type: 'Coach', date: '2023-08-11', where: 'Vienna Airport', …}
  //   {id: 3, category: 'stay', type: 'Apartment', date: '2023-08-12', where: 'Bratislava', …}
  //   {id: 4, category: 'trip', type: 'Apartment', date: '2023-08-12', where: 'Bratislava', …}
  // }

  const dateGroups = {};

  // Per ogni elemento, creiamo una proprietá all'interno dell'oggetto
  // dateGroups, la cui key é il valore del parametro date dell'elemento
  // corrente. Per ognuno, creiamo un array vuoto.
  data.forEach((elem) => {
    if (!dateGroups[elem.date]) {
      dateGroups[elem.date] = [];
    }
    // pushiamo l'elemento corrente all'interno del dateGroup che ha come
    // chiave la sua date
    dateGroups[elem.date].push(elem);
  });

  // ora dateGroups ha questo formato:

  // {
  //   "2023-08-10" : [
  //     {id: 1, category: 'trip', type: 'Flight', date: '2023-08-10', where: 'Roma Fiumicino', …}
  //   ],
  //   "2023-08-11" : [
  //     {id: 2, category: 'trip', type: 'Coach', date: '2023-08-11', where: 'Vienna Airport', …}
  //   ],
  //   "2023-08-12" : [
  //     {id: 3, category: 'stay', type: 'Apartment', date: '2023-08-12', where: 'Bratislava', …},
  //     {id: 4, category: 'trip', type: 'Apartment', date: '2023-08-12', where: 'Bratislava', …}
  //   ]
  // }

  console.log(dateGroups);

  // usando Object.entries, possiamo leggere dateGroups cosi:

  // [
  //   [
  //     "2023-08-10",
  //     [
  //       {id: 1, category: 'trip', type: 'Flight', date: '2023-08-10', where: 'Roma Fiumicino', …}
  //     ]
  //   ],
  //   [
  //     "2023-08-11",
  //     [
  //       {id: 2, category: 'trip', type: 'Coach', date: '2023-08-11', where: 'Vienna Airport', …}
  //     ]
  //   ],
  //   [
  //     "2023-08-12",
  //     [
  //       {id: 3, category: 'stay', type: 'Apartment', date: '2023-08-12', where: 'Bratislava', …},
  //       {id: 4, category: 'trip', type: 'Apartment', date: '2023-08-12', where: 'Bratislava', …}
  //     ]
  //   ]
  // ]

  console.log(Object.entries(dateGroups));

  return (
    <div className={classes.dates}>
      {Object.entries(dateGroups).map((group) => {
        const [key, eventData] = group;
        const elemDate = new Date(key);

        return (
          // la key va messa all'elem piu esterno
          <section key={`group-${key}`}>
            <div>{dateToString(elemDate)}</div>
          </section>
        );
      })}
    </div>
  );
};

export default Body;
