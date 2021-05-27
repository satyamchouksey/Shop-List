import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';

function App() {
  const [item, setitem] = useState('');
  const [itemList, setitemList] = useState([]);
  const handleAddItem = () => {
    setitemList(prev => [...prev, item]);
  }
  const handleDelete = (index) => {
    let tempList = itemList;
    tempList.splice(index, 1);
    console.log(itemList)
    setitemList([...tempList]);
  }
  const displayList = () => {
      return (itemList.map((item, index) => {
        return (
          <div key={index} className="list">
            <span>{index}</span>
            <span>{item}</span>
            <div className="list-buttons">
              <span>Modify</span>
              <span onClick={() => handleDelete(index)}>Delete</span>
            </div>
          </div>
        );
      }))
    }
  
  return (
    <div className="App">
      <div className="inputBar">
        <input placeholder="bread.." value={item} onChange={(event) => setitem(event.target.value)} />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <div className="table">
        {displayList()}
      </div>
    </div>
  );
}

export default App;
