import React from "react";
import { dialog } from "./styles/notification.module.scss";

export default function BoardNotification() {
  return (
    <dialog className={dialog} open={true}>
      <h1>commit</h1>

      <form method="dialog">
        <button type="submit">OK</button>
      </form>
    </dialog>
  );
}
