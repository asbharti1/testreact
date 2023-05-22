import React, { useState } from "react";

export default function InputExample() {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // event.stopPropagation();
    console.log("Input value: ", value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
