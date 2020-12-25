import React, {useState, useEffect} from 'react';
import './../App.css';

export function TodoList() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="item">
           {items.map(item => (
                <div className="apps" key={item.id}>
                {item.title}
                </div>
            ))}
        </div>
      );
    }
  }

  export default TodoList;