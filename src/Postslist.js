import React, { useState, useEffect } from 'react';
import Post from "./Post.js";
import Commentt from "./Commentt.js";

function PostList(props) {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await response.json();
                setPosts(data);
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
        const username = users.filter((user) => userId === user.id);
        return username[0].name;
    }
    function getUserByIdComment(userId) {
    return comments.map((koment, i) => {
        if(koment.postId == userId ){
            return <Commentt key={i}  comment={koment.body}/>
        }
    });
    }
    function postsRandomFunction() {
        if (posts.length === 0 || users.length === 0 || comments.length === 0) {
            return <p>Loading...</p>;
        }else{

        return posts.map(post => {
            const user = getUserByIdUser(post.userId);

            
            return (
                <>
                    <Post key={post.id}  name={user} id={post.id} title={post.title} body={post.body} />
                        {getUserByIdComment(post.userId)}
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

export default PostList;