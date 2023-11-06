import React, { useState, useEffect } from 'react';
import Post from "./Post.js";
import Commentt from "./Commentt.js";

// Dummy comment from Jēkabs

function Postslist(props) {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await response.json();
                setPosts(data);
                setLoading(false);
        }
        fetchPosts();
    }, []);

    useEffect(() => {
        async function fetchUsers() {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setUsers(data);
        }
        fetchUsers();
    }, []);

    useEffect(() => {
        async function fetchUsers() {
                const response = await fetch("https://jsonplaceholder.typicode.com/comments");
                const data = await response.json();
                setComments(data);
        }
        fetchUsers();
    }, []);

    function getUserByIdUser(userId) {
        return users[userId];
    }
    function getUserByIdComment(userId) {
    // const user = users[userId];
    return comments[userId].map((koment) => {
        return <Commentt  comment={koment.body}/>
    });
    }
    // function getCommentByIdUser(userId) {
    //     return comments[userId];
    // }

    // function getCommentByIdUser(){
    // const comentari = comments.map((commentss, i) => {
    //   return <li>Komentars: {i} {commentss.body}</li>
    // })
    // }

    function postsRandomFunction() {
        if (posts === [] && users === []) {
            return <p>Loading...</p>;
        }else{

        return posts.map(post => {
            const user = getUserByIdUser(post.userId);
            // const comments = getUserByIdComment(post.userId);
            // const commenttt = getCommentByIdUser(post.userId);

            
            return (
                <>
                <Post key={post.id}  name={user ? user.name : 'nav usera'} id={post.id} title={post.title} body={post.body} />
                {getUserByIdComment(user.body)}
                </>
            );
        });
    }
    }

    return (
          <>
            {postsRandomFunction()}
          </>
    );
}

export default Postslist;