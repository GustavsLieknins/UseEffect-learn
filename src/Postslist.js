import React, { useState, useEffect } from 'react';
import Post from "./Post.js";

function Postslist(props) {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
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

    function getUserById(userId) {
        return users[userId];
    }

    function Posts() {
        if (loading) {
            return <p>Loading...</p>;
        }

        return posts.map(post => {
            const user = getUserById(post.userId);
            return (
                <Post key={post.id} name={user ? user.name : 'Unknown User'} id={post.id} title={post.title} body={post.body} />
            );
        });
    }

    return (
          <>
            {Posts()}
          </>
    );
}

export default Postslist;