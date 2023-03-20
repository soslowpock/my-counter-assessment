import React, { useState } from "react";
import Counter from "./counter";


const CountersList = () => {
  const initialState = [
    { value: 2, id: crypto.randomUUID(), name: 'Компьютер' },
    { value: 0, id: crypto.randomUUID(), name: 'Холодильник' },
    { value: 5, id: crypto.randomUUID(), name: 'Телефон' },
    { value: 1, id: crypto.randomUUID(), name: 'Ботинки' },
    { value: 0, id: crypto.randomUUID(), name: 'Плащ' },
  ]
  const [counters, setCounters] = useState(initialState)



  const handledelete = (id) => {
  
    setCounters(prevState => prevState.filter(counter => counter.id !== id))

  }

  const handleIncrement = (id) => {
    setCounters(prevState => prevState.map(counter => counter.id === id ? { ...counter, value: counter.value + 1 } : counter))
    
  }

  const handleDecrement = (id) => {
    if (counters.find(counter => counter.id === id).value === 0) return
    setCounters(prevState => prevState.map(counter => counter.id === id ? { ...counter, value: counter.value - 1 } : counter))
  }
        
  
  const handleRefresh = () => {
   
    setCounters(initialState)
  }
  
  
  return (
    <div  style={{marginLeft: '10px'}}> <button className="btn btn-small btn-secondary" onClick={handleRefresh}>Обновить 🗘</button>
      <br />
      
      {counters.map((counter) => <Counter
        key={counter.id}
        {...counter}
        onDelete={handledelete}
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
         />
        
      )}
      
      
    </div>
)
      }

    
export default CountersList