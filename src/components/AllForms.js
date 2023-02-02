import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/form.css";
function AllForms() {
  const [forms, setForms] = useState([]);
  const [check, setCheck] = useState(true);
  useEffect(() => {
    if (check) {
      axios
        .get("http://localhost:8080/property")
        .then((res) => {
          console.log(res.data.userData);
          setForms(res.data.userData);
          // console.log(forms);
        })
        .catch((err) => {
          console.log(err);
        });

      setCheck(false);
    }
  }, [check, forms]);
  // console.log(forms);
  return (
    <div style={{ background: "#7FDBFF" }}>
      <h1 style={{ color: "red" }}>All Application forms</h1>

      {forms.map((data,i) => {
        // console.log(data);
        return(
<div className="card" key={i}>
          <h2 style={{ marginLeft: "0px", color: "blue" }}>Form:{data._id}</h2>
          <h4>
            Name: <span>{data.name}</span>
          </h4>
          <h4>
            Email: <span> {data.email} </span>
          </h4>
          <h4>
            phone: <span> {data.phone}</span>
          </h4>
          <h4>
            DOB: <span>{data.date}</span>
          </h4>
        </div>
        )
        
      })}
    </div>
  );
}

export default AllForms;
