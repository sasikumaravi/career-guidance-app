import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { useAuth } from "./Auth";
import imgs from "../Pics/elegir-carrera.webp";
export default function Guidance() {
  const [data, setData] = useState("");
  const [show, setShow] = useState(false);
  const [list1, setList1] = useState([]);
  const auth = useAuth();
  //
  console.log(show);
  useEffect(() => {
    if (show && data === "secondary") {
      axios
        .get("http://localhost:3003/secondary")
        .then((res) => {
          setList1(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [data]);
  useEffect(() => {
    if (show && data === "college") {
      axios
        .get("http://localhost:3002/college")
        .then((res) => {
          setList1(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [data]);
  useEffect(() => {
    if (show && data === "higher") {
      axios
        .get("http://localhost:3004/higher")
        .then((res) => {
          setList1(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [data]);
  return (
    <div>
      <h1 className="greet"> Welcome {auth.user} !!!!!</h1>
      <div className="mains">
        <div>
          <select
            className="select"
            onChange={(e) => {
              setData(e.target.value);
              setShow(true);
            }}
          >
            <option selected disabled>
              Select your Standard
            </option>
            <option className="guide" value="secondary">
              9th-10th
            </option>
            <option value="higher">11th-12th</option>
            <option value="college">After School</option>
            <option value="bachelor">After Bachelor's degree</option>
            <option value="graduate">After College</option>
          </select>
          {show &&
        list1.map((x) => (
          <div className="card">
              <img src={x.image} style={{ height: "200px" }} alt="nothing" />
              <h1>{x.name}</h1>
              <h1>{x.counsellar}</h1>
          </div>
        ))}
        </div>
        <div>
          <img src={imgs} alt="none" />
        </div>
      </div>
    </div>
  );
}
