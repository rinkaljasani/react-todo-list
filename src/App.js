import React, { useState } from 'react';
import TodoList from './components/TodoList';
function App() {
  const [inputList, setInputList] = useState('buy apple');
  const [items, setItems] = useState([]);
  function ItemEvent(e){
    
      setInputList(e.target.value);
  }

  const listOfItems = () => {
    if(inputList.trim()){
      setItems((oldItem) => {
        return [...oldItem,inputList];
      });
      setInputList('');
    }

  }
  function deleteItem(item){
    console.log('delete')
    setItems((oldItem) => {
      return oldItem.filter( (arrElmt,index) => {
        return index!== item;
      });
    })
}
  return (
    <>
      <div className="card text-dark bg-light mb-3 center-div position-absolute top-50 start-50 translate-middle">
        <div className="card-header"><h1>Todo List</h1></div>
        <div className="card-body item-div">
        <div className="input-group mb-3 ">
          
          <input type="text" className="form-control" placeholder="Add Item" aria-label="Username" aria-describedby="basic-addon1" onChange={ItemEvent} value={inputList}/>
          <span className="input-group-text" id="basic-addon1"><button type="submit" className="btn btn-lg" onClick={() => listOfItems()}> + </button></span>
          </div>
          <ul type="pl-0 ">
            
            {items.map((item,index) => {
              return(
                <TodoList 
                  key={index} 
                  id={index} 
                  text={item}
                  onSelect={deleteItem}
                />
              ) 
            })}
          </ul>
          
        </div>
      </div>
    </>
  )
}

export default App
