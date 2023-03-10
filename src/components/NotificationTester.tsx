import React from "react";
import { useState } from "react";
import Notification from "./Notification";

const DialogModalTester = () => {
  const [isOpened, setIsOpened] = useState(false);

  const onProceed = () => {
    console.log("Proceed clicked");
  };

  return (
    <div>
      <button onClick={() => setIsOpened(true)}>Open dialog modal</button>

      <Notification
        title="Dialog modal example"
        isOpened={isOpened}
        onProceed={onProceed}
        onClose={() => setIsOpened(false)}
      >
        <p>To close: click Close, press Escape, or click outside.</p>
      </Notification>
    </div>
  );
};
export default DialogModalTester;
