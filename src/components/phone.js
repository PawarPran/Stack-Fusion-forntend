import React, { useState } from "react";
function Phone(props){
  const [data, setData] = useState();

  const changeHandler = (e) => {
    validatePhone(e.target.value);
    setData(e.target.value);
    props.setAllData({...props.allData,[e.target.name]:e.target.value})
    // console.log((e.target.value).length)
  };
  function validatePhone(phone) {
    if (!/[^a-zA-Z\-\/]/.test(phone)) {
      props.setError((preveiousState)=>{return{...preveiousState,Phone: " Phone Number must contain only numbers "}});
    }else  if (phone.length > 10) {
      props.setError((preveiousState)=>{return{...preveiousState,Phone: " Please enter valid phone number "  }});
    
    }else {
      props.setError((preveiousState)=>{return{...preveiousState,Phone: ""  }})
    }
   
  
  }
    return(
        <>
         <div id="phone" className="field">
          <label htmlFor="data-test-id">Phone :- </label>
          <input
            type="phone"
            data-test-id="phone"
            value={data}
            onChange={changeHandler}
            placeholder="phone Number"
            name="phone"
            required
          />
        <p>{props.error.Phone}</p>
        </div>
        </>
    )
}
export default Phone;