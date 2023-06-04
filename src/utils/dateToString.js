const dateToString = (date) => {
  const day = date.toLocaleString("en-US", {
    day: "2-digit",
  });
  const month = date.toLocaleString("en-US", {
    month: "long",
  });

  return `${day} ${month}`;
};

export default dateToString;

// Creo outboundDate e returnDate to capture data di
// andata e di ritorno.
// In utils creo funzione dateToString che accetta valore date
// con cui creo due costanti day e month che trasformano la date
// che ricevo in versione day - 2 digit e month - long.
// dateToString ritorna una stringa (template literal) con day
// e month.
// In Header torno a <p></p> e creo stringa in cui passo
// outboundDate e returnDate alla funzione dateToString
