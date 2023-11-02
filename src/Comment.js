import React, { useState, useEffect } from 'react';
function Comment() {
    const [comment, setComment] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      async function meoww() {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments/1");
        const data = await response.json();
        setComment(data);
        setLoading(!true);
        };
  
      meoww();
    }, []);
    function UserGreeting() {
        if(loading == false){
        return <>
            <p>Post id: {comment.postId}</p>
            <p>Id: {comment.id}</p>
            <p>Name: {comment.name}</p>
            <p>Email: {comment.email}</p>
            <p>Body: {comment.body}</p>
            </>
        }else{
            return <p>loading!!!!!!!!!</p>
        }
      }
    return (
      <>
    {UserGreeting()}
      </>
    );
  }
  
  export default Comment;