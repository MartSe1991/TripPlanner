import React from "react";

const Body = ({ data }) => {
  return (
    <div>
      {data.map((elem) => (
        // la key va messa all'elem piu esterno
        <section key={elem.id}>
          <h3>{elem.date}</h3>
        </section>
      ))}
    </div>
  );
};

export default Body;
