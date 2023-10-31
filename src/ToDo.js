import React, { useState } from 'react';
function ToDo(props) {
    const [checkboxstate, setCheckboxstate] = useState(props.completed);

    function changeState(){
        if(checkboxstate === true){
            setCheckboxstate(false)
        }else{
            setCheckboxstate(true)
        }
    }

    return (
      <>
      <p>User Id: {props.userId}</p>
      <p>Id: {props.id}</p>
      <p>{props.title}</p>
      <input type="checkbox" onChange={() => changeState()} checked={checkboxstate} />
      </>
    );
  }
  
  export default ToDo;