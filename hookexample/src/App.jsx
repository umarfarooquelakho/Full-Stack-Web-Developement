import React, { useRef, useState, useEffect } from "react";
import styles from "./App.module.css";
import Child from "./pages/Child";

export default function App() {
  const [count, setCount] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  let nameRef = useRef(null);
  let emailRef = useRef(null);

  let handleChange = (e) => {
    // console.log(e.target.value);
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted with Name:", nameRef.current.value, "and Email:", emailRef.current.value );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSpent((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function Increment() {
    setCount(count + 1);
    console.log("Counter Incremented", count + 1);
  }

  function Reset() {
    setCount(0);
    console.log("Counter is Reset to 0");
  }

  return (
    <div>
      <h1>Time Spent on this page</h1>
      <p>{timeSpent} Sec </p>
      <div className={styles.container}>
        <h1 className={styles.appTitle}>Welcome to the Counter App</h1>
        <p className={styles.para}>Click the Button to increment the counter</p>
        <button onClick={Increment} className={styles.button}>
          Increment
        </button>
        <p className={styles.para}>Counter : {count}</p>
        <p className={styles.para}>Click the Button to Reset the Counter</p>
        <button onClick={Reset} className={styles.button}>
          Reset
        </button>
      </div>

      <form className={styles.form}>
        <div className="name">
          <label>
            Name :
            {/* <input type="text" name="name" id="name" onChange={handleChange} /> */}
            <input type="text" name="name" id="name" ref={nameRef} />
          </label>
        </div>
        <br />
        <div className="email">
          <label>
            email:
            {/* <input type="email" name="email" id="email" onChange={handleChange} /> */}
            <input type="email" name="email" id="email" ref={emailRef} />
          </label>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button type="reset" onClick={() => { setName(""); setEmail(""); }}>
          Reset
        </button>
      </form>
    </div>
  );
}
