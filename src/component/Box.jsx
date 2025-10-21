import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img src={props.item && props.item.img} alt="가위바위보" />
      <p>WIN</p>
    </div>
  );
};

export default Box;
