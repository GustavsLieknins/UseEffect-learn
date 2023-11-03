import React, { useState, useEffect } from 'react';
import Post from "./Post.js";
import PostsList from "./Postslist.js";
function Postslist() {
    const [posts, setPosts] = useState({});
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function meoww() {
          const response = await fetch("https://jsonplaceholder.typicode.com/users");
          const data = await response.json();
          setUser(data);
          setLoading(!true);
          };
    
        meoww();
      }, []);
    // <p>User id: {props.userId}</p>
    // <p>Id: {props.id}</p>
    // <p>Title: {props.title}</p>
    // <p>Body: {props.body}</p>
    function maju() {
        if(loading == false){
        return user.map(userr => {
            return <PostsList name={userr[1]} />
        })
        }else{
            return <p>loading!!!!!!!!!</p>
        }
    }
    return (
      <>
        {maju()}
      </>
    );
  }
  
  export default Postslist;