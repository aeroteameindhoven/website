import React from "react";
import { dialog, link_container } from "./styles/notification.module.scss";

export default function BoardNotification() {
  return (
    <dialog className={dialog} open={true}>
      <h1>WE ARE LOOKING FOR NEXT YEAR&apos;S BOARD!</h1>
      <ul>
        <li>Team Manager</li>
        <li>Technical Manager</li>
        <li>HR Manager</li>
        <li>PR & Event Manager</li>
        <li>Finance Manager</li>
      </ul>
      <div className={link_container}>
        <form method="dialog">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSch1kiTE33zF5nW2WTz0WfSersjoqQcEDsEOiFNQncdMoM-Qw/viewform"
            target="_blank"
            rel="noreferrer"
          >
            Apply here
          </a>
          <button type="submit">Close</button>
        </form>
      </div>
    </dialog>
  );
}
