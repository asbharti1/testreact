import { createContext, useState, useContext } from "react";
const DataContext = createContext();

// Parent Component
function ParentComponent() {
  const [childData, setChildData] = useState(null);

  return (
    <DataContext.Provider value={{ setChildData }}>
      <ChildComponent />
      <p>{childData}</p>
    </DataContext.Provider>
  );
}

// Child Component
function ChildComponent() {
  const { setChildData } = useContext(DataContext);

  const handleSendData = () => {
    setChildData("Data from child");
  };

  return <button onClick={handleSendData}>Send</button>;
}