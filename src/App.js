import React, { useState, useCallback } from "react";
import Button from "./Button";
import Text from "./Text";
const App = () => {
  const [message, updateMessage] = useState("Hello user , good morning");

  const changeMessage = useCallback(() => {
    // console.log("before update", message);
    updateMessage((prevData) => {
      console.log("previoud data is", prevData);
      return "Hello user , good afternoon";
    });
    // console.log("after update", message);
  }, []);
  return (
    <>
      <div>{message}</div>
      <Button clickAction={changeMessage}>Change Message</Button>
    </>
  );
};

export default App;
