import React,{useState} from 'react'
import ChildComponent from './child';

function ParentComponent() {
    const [dataFromChild, setDataFromChild] = useState(null);
    const handleChildData =(data) =>{
         setDataFromChild(data);
    }
   return (
    <div>
        <h1>parent data</h1>
        <ChildComponent onData={handleChildData}/>
        {<p>Data from Child: {dataFromChild}</p>}
    </div>
  )
}

export default ParentComponent;