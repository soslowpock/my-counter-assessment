import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


const Counter = (props) => {
  const { value } =  props 





  return (
    <div style={{marginLeft: "10px"}}> <span>{props.name}</span>
      <p
        className="badge"
        style={
          value >= 1
            ? { color: "green" }
            : { color: "red" }}>
        Всего
        <span> {value}</span>
      </p>
      <button className="btn btn-small p-2 m-2 btn-primary" onClick={() => props.onIncrement(props.id)}>+</button>
      <button className="btn btn-small p-2 m-2 btn-primary" onClick={() => props.onDecrement(props.id)}>-</button>
      <button className="btn btn-sm btn-danger" onClick={() => props.onDelete (props.id)}>Delete</button>
      <br/>
      
 </div>
    
  )
}

export default Counter;