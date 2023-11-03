import React, { useState, useEffect } from 'react';
import Post from "./Post.js";
function Postslist(props) {
    const [posts, setPosts] = useState({});
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      async function meoww() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
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
        return posts.map(post => {
            return <Post name={props.name} userId={post.userId} id={post.id} title={post.title} body={post.body} />
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