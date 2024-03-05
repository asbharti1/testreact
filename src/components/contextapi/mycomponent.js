
import React, { useContext } from "react";
import { MyContext } from "./mycontext";

function MyComponent() {
  // Use the useContext hook to access the context
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>Value from Context: {value}</p>
      <button onClick={() => setValue("New Value")}>Change Value</button>
    </div>
  );
}

export default MyComponent;
