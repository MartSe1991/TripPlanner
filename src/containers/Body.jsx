import React, { useContext } from "react";
import classes from "./Body.module.scss";
import dateToString from "../utils/dateToString";
import Card from "../components/Card";
import FilterContext from "../context/filter_status";

const Body = ({ data }) => {
  const { activeFilter } = useContext(FilterContext);
  // data ha inizialmente questo formato:

  // data: [
  //   {id: 1, category: 'trip', type: 'Flight', date: '2023-08-10', where: 'Roma Fiumicino', …}
  //   {id: 2, category: 'trip', type: 'Coach', date: '2023-08-11', where: 'Vienna Airport', …}
  //   {id: 3, category: 'stay', type: 'Apartment', date: '2023-08-12', where: 'Bratislava', …}
  //   {id: 4, category: 'trip', type: 'Apartment', date: '2023-08-12', where: 'Bratislava', …}
  // ]

  const dateGroups = {};

  // Per ogni elemento, creiamo una proprietá all'interno dell'oggetto
  // dateGroups, la cui key é il valore del parametro date dell'elemento
  // corrente. Per ognuno, creiamo un array vuoto.
  data.forEach((elem) => {
    if (!dateGroups[elem.date]) {
      // se non esiste una key all interno di dateGroups che sia uguale alla data dell-elem corrente
      dateGroups[elem.date] = []; // allora crea una chiave all-interno di dateGroups utilizzando il valore corrente
      // (dateGroups[elem.date] equivale a scrivere dateGroups.qualcosa )
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
            <div className={classes.single_date}>{dateToString(elemDate)}</div>
            <div className={classes.cards}>
              {eventData
                .filter((element) => {
                  return element.type === activeFilter || !activeFilter; //ritorna true se element.type é uguale ad activeFilter OPPURE se activeFilter é falsy
                })
                .map((elem) => {
                  return (
                    <Card
                      key={elem.id}
                      category={elem.category}
                      type={elem.type}
                      where={elem.where}
                      date={elem.date}
                      start_time={elem.start_time}
                      end_time={elem.end_time}
                      notes={elem.notes}
                      destination={elem.destination}
                    />
                  );
                })}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Body;
