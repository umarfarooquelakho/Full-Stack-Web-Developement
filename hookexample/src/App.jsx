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
    console.log(
      "Form Submitted with Name:",
      nameRef.current.value,
      "and Email:",
      emailRef.current.value,
    );
  };

  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSpent((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 10);
    }, 10);

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (milliseconds) => {
    const mins = String(Math.floor(milliseconds / 60000)).padStart(2, "0");
    const secs = String(Math.floor((milliseconds % 60000) / 1000)).padStart(
      2,
      "0",
    );
    const milisecs = String(milliseconds % 1000).padStart(3, "0");
    return `${mins}:${secs}:${milisecs}`;
  };

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

      <div
        className={styles.stopwatch}
        style={{
          marginTop: "30px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h2>Stop Watch</h2>
        <p style={{ fontSize: "1.5rem", margin: "10px 0" }}>
          {formatTime(elapsedTime)}
        </p>
        <div>
          <button onClick={() => setIsRunning(true)} style={{ margin: "5px" }}>
            Start
          </button>
          <button onClick={() => setIsRunning(false)} style={{ margin: "5px" }}>
            Stop
          </button>
          <button
            onClick={() => {
              setIsRunning(false);
              setElapsedTime(0);
            }}
            style={{ margin: "5px" }}
          >
            Reset
          </button>
        </div>
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
        <button
          type="reset"
          onClick={() => {
            setName("");
            setEmail("");
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
}
