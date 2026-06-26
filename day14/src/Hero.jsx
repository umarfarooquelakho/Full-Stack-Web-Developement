import React from "react";

export default function Hero(props) {
  if (props.login) {
    return (
      <div className="Hero">
        {props.welcome && <h1>Welcome to Hero Page</h1>}
        <h3>Hero Section</h3>
        <p>This is the Hero component</p>
        <h2>{props.name}</h2>
      </div>
    );
  } else {
    return <>{props.age>=18?"Please Login to Continue...":"You are not allowed to Login Because your age is less than 18"}
    </>;
  }
}
