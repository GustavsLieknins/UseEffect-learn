import ToDo from './ToDo.js';

function App() {
  const todo = {
    userId: 1,
    id: 1,
    title: 'delecktus autism',
    completed: false,
  };
  
  // const ToDoo = todo.map((item, i) => {
  //   return <ToDo userId={item.userId} idd={item.id} title={item.title} completed={item.completed} />
  // })
  return (
    <>
    {/* <p>Staff</p> */}
    <ToDo userId={todo.userId} idd={todo.id} title={todo.title} completed={todo.completed} />
    </>
  );
}

export default App;
