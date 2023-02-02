import React, { useState } from "react";

function Gender(props){
  const [data, setData] = useState("");

  const changeHandler = (e) => {
    setData(e.target.value);
    props.setAllData({...props.allData,[e.target.name]:e.target.value})
    validateAge(e.target.value);

   
   
  };

  function validateAge(data) {
    const today = new Date();
    const age = today.getFullYear() - new Date(data).getFullYear();
   
    if (age < 18) {
      props.setError(previousState => {
        return {...previousState,Gender : "User must be greater than 18 yrs"}})
    }else{
      props.setError(previousState => {
        return {...previousState,Gender : ""}})
    }
    
  }
    return(
        <>
        <div id="gender" className="field" >
        <label>
        Date of Birth:-
        <input type="date" value={data} name="date" onChange={changeHandler} required />
      </label>
        <p>{props.error.Gender}</p>
        
        </div>
        </>
    )
}
export default Gender;