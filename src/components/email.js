import React, { useState } from "react";
function Email(props){
  const [data, setData] = useState();
  const changeHandler = (e) => {
    validateEmail(e.target.value);
    setData(e.target.value);
  //  if((!e.target.value).includes('@')){
    props.setDisplayName(e.target.value);
    props.setAllData({...props.allData,[e.target.name]:e.target.value})
      // }
  };
  function validateEmail(email) {
    if (!email.includes('@')) {
      props.setError(previousState => {
        return { ...previousState,Email : " Email must contain @"}})
    }else{
      props.setError(previousState => {
        return { ...previousState,Email : ""}})
    }
    return;
  }
    return(
        <>
         <div id="mail">
          <label htmlFor="data-test-id">Email :- </label>
          <input
            type="Email"
            value={data}
            name="email"
            data-test-id="email"
            className="inputfield"
            onChange={changeHandler}
            placeholder="Email-id"
            required
          />
          <p>{props.error.Email}</p>
        </div>
        </>
    )
}
export default Email;