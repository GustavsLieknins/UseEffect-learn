import ToDo from './ToDo.js';
import { useEffect, useState } from  "react";

function App() {
  const [toDo, setToDo] = useState({});
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function meow() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/4");
      const data = await response.json();
      setToDo(data);
      };
    meow();
  }, []);
  // const todo = {
  //   userId: 1,
  //   id: 1,
  //   title: 'delecktus autism',
  //   completed: false,
  // };
  
  // const ToDoo = todo.map((item, i) => {
  //   return <ToDo userId={item.userId} idd={item.id} title={item.title} completed={item.completed} />
  // })
  return (
    <>
    {/* <p>Staff</p> */}
    <ToDo {...toDo}/>
    </>
  );
}

export default App;
