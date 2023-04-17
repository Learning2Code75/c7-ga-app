import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Loader from "../components/Loader";
import { getEvents } from "../redux/actions/events";
import { getUsers } from "../redux/actions/users";

const Events = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state?.events);
  const user = useSelector((state) => state?.auth?.user);
  const [isLoading, setIsLoading] = useState(false);

  const s = () => {
    setIsLoading(false);
  };
  const f = (m) => {
    setIsLoading(false);
    console.log(m);
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(getEvents(user, s, f));
    // dispatch(getUsers(s, f));
  }, [dispatch]);
  return (
    <div className="PageContainer">
      <h4
        style={{
          paddingLeft: "1rem",
        }}
      >
        Events
      </h4>
      <div>
        <Grid
          container
          gap={2}
          style={{
            padding: ".5rem 1rem",
          }}
        >
          {events.map((eve) => (
            <Grid item xs={12} md={6}>
              <EventCard eve={eve} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div>
        {/* <pre>{JSON.stringify(events, null, 2)}</pre> */}
        {isLoading && <Loader isHome={false} isLoading={isLoading} />}
      </div>
    </div>
  );
};

export default Events;
