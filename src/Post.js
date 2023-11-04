import React, { useState } from 'react';
function Post(props) {
    // function maju() {
    //         if(loading == false){
    //             return <>
    //                 <p>User id: {props.userId}</p>
    //                 <p>Id: {props.id}</p>
    //                 <p>Title: {props.title}</p>
    //                 <p>Body: {props.body}</p>
    //                 </>
    //             }else{
    //                 return <p>loading!!!!!!!!!</p>
    //             }
    //         };

    return (
      <>
                    <p>Name: {props.name}</p>
                    <p>Id: {props.id}</p>
                    <p>Title: {props.title}</p>
                    <p>Body: {props.body}</p>
      </>
    );
  }
  
  export default Post;