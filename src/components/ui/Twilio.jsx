import React from "react";
import { Button } from "./button";

const Twilio = () => {
  const getUpdates = () => {
    const body = JSON.stringify({
      chat_id: 6734424917,
      text: "hello boyy",
    });

    fetch(
      //   "https://api.telegram.org/bot7437383243:AAEaHTr38NjBsIfR68222x9kt8O9MbxBmUQ/getUpdates",
      "https://api.telegram.org/bot7437383243:AAEaHTr38NjBsIfR68222x9kt8O9MbxBmUQ/sendMessage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      },
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);
      })
      .catch((error) => {
        console.error("Error fetching updates:", error);
      });
  };
  return (
    <div>
      <Button onClick={getUpdates}>Send</Button>
    </div>
  );
};

export default Twilio;
