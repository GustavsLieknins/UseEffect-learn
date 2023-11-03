import ToDo from './ToDo.js';
import Comment from './Comment.js';
import PostsLists from './Users.js';
import { useEffect, useState } from  "react";

function App() {
  const [toDo, setToDo] = useState({});
  // const [comment, setComment] = useState({});
  const [loading, setLoading] = useState(true);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function meow() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/4");
      const data = await response.json();
      setToDo(data);
      setLoading(!true);
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
    {loading ? <p>loading...</p> : <ToDo {...toDo}/>}
    {/* <Comment /> */}
    <PostsLists />
    </>
  );
}

export default App;
