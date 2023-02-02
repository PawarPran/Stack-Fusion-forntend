import React, { useState } from "react";
function Name(props) {
  const [data, setData] = useState();
  const changeHandler = (e) => {
    validateName(e.target.value);
    setData(e.target.value);
    props.setAllData({...props.allData,[e.target.name]:e.target.value})
    // console.log(e.target.value)
  };
  function validateName(name) {
    if (!/[0-9]/.test(name)) {
      props.setError(previousState => {
        return {...previousState, Name : " Name is not alphanumeric !"}})
    }else{
      props.setError(previousState => {
        return {...previousState,Name : ""}})
    }
  }
  return (
    <>
      <div id="name">
        <label htmlFor="data-test-id">Name :- </label>
        <input
          type="text"
          value={data}
          data-test-id="name"
          name="name"
          onChange={changeHandler}
          className="inputfield"
          placeholder="Username"
          required
        />
        <p>{props.error.Name}</p>
      </div>
    </>
  );
}
export default Name;
