import { Button } from 'antd';
import React,{useState} from 'react'

function ChildComponent({onData}) {
    const [inputValue, setInputValue] = useState("");
    const handleChange =(evt) =>{
            setInputValue(evt.target.value)
    }
    const sendDataToParent =() =>{
        onData(inputValue);
    }

  return (
    <div>
        <h1>Child data</h1>
        <input type="text" value={inputValue} onChange={handleChange} />
        <Button onClick={sendDataToParent}>Send Data</Button>

    </div>

  )
}

export default ChildComponent;