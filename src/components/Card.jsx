import React from "react";
import classes from "./Card.module.css";
import dateToString from "../utils/dateToString";
import Flight from "./icons/Flight";
import Coach from "./icons/Coach";
import Stay from "./icons/Stay";
import Train from "./icons/Train";
import Event from "./icons/Event";
import Container from "./Container";

const Card = (props) => {
  let Icon = null; //

  switch (props.type) {
    case "Flight": // se props.type === "Flight" allora esegui sotto
      Icon = Flight;
      break;
    case "Coach":
      Icon = Coach;
      break;
    case "Apartment":
      Icon = Stay;
      break;
    case "Train":
      Icon = Train;
      break;
    case "Event":
      Icon = Event;
      break;
    default:
      Icon = null;
  }

  return (
    <Container>
      <div className={classes.title}>
        <icon>
          <Icon />
        </icon>
        <div>
          <div>{props.where}</div>
          <div>{props.destination}</div>
        </div>
      </div>
      <div>
        <div>
          {props.category === "trip"
            ? `Departs at ${props.start_time}`
            : `Check in at ${props.start_time}`}
        </div>
        <div>
          {props.category === "trip" && (
            <div>{`Arrives at ${props.end_time}`}</div>
          )}
        </div>
        {props.notes && props.notes !== "" && (
          <div className={classes.top_border}>{props.notes}</div>
        )}
      </div>

      {/* {props.category === "stay" && (
            <>
              <div className={classes.title}>
                <icon>{props.type === "Apartment" && <Stay />}</icon>
                <div>
                  <div>{props.where}</div>
                  <div>{`Check in: ${props.start_time}`}</div>
                </div>
              </div>
              <div>{props.notes}</div>
            </>
          )} */}
    </Container>
  );
};

export default Card;
