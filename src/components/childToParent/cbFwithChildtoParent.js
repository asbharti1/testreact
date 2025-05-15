import { useState } from "react";
function ParentComponent() {
    const [childData, setChildData] = useState(null);
  
    const handleChildData = (data) => {
      setChildData(data);
    };
  
    return (
      <ChildComponent onDataSend={handleChildData} />
    );
  }
  
  // Child Component
  function ChildComponent({ onDataSend }) {
    const sendDataToParent = () => {
      onDataSend("Hello from child");
    };
  
    return (
      <button onClick={sendDataToParent}>Send Data</button>
    );
  }