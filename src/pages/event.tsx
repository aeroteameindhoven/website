import React, { useEffect, useState } from "react";
import { HeadContent } from "../components/HeadContent";
import Layout from "../components/Layout";
import { wrapper, countdown, button } from "./event.module.scss";

export function Head() {
  return <HeadContent title="Aegle Takes Flight" description="Aero reveals: Aegle Takes Flight" />;
}

export default function Event() {
  return (
    <Layout>
      <div className={wrapper}>
        <Countdown />
        <a
          href="https://www.youtube.com/channel/UC48Rt9YAXZIi9RsOdSUUcFQ/live"
          target="_blank"
          rel="noopener noreferrer"
          className={button}
        >
          Join us on Youtube
        </a>
      </div>
    </Layout>
  );
}

function Countdown() {
  const date = new Date("2023-06-19T15:00:00+02:00");

  const format = new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "medium" });

  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 60 * 1000);

    return () => clearInterval(interval);
  });

  const [hours_string, minutes_string] = duration_until(now, date);

  let relative_duration = null;
  if (hours_string != null || minutes_string != null) {
    relative_duration = `in ${hours_string} ${minutes_string}`;
  }

  return (
    <div className={countdown}>
      Event will be live {relative_duration} at {format.format(date)}
    </div>
  );
}

function duration_until(start: Date, end: Date) {
  const total_minutes = Math.round((end.getTime() - start.getTime()) / (60 * 1000));
  const hours = Math.floor(total_minutes / 60);
  const minutes = total_minutes % 60;

  let hours_string = null;
  if (hours > 1) {
    hours_string = `${hours} hours`;
  } else if (hours == 1) {
    hours_string = `${hours} hour`;
  }

  let minutes_string = null;
  if (minutes > 1) {
    minutes_string = `and ${hours} minutes`;
  } else if (minutes == 1) {
    minutes_string = `and ${hours} minute`;
  }

  return [hours_string, minutes_string];
}
