function Post(props) {
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