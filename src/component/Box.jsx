import React from "react";

const Box = (props) => {
  let result;

  // 컴퓨터 박스일 때 승패 결과를 반대로 변경
  if (props.title === "컴퓨터" && props.result !== "tie" && props.result !== "") {
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }
  if (props.title === "컴퓨터") {
    console.log("computer", result);
  }

  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <img src={props.item && props.item.img} alt="가위바위보" />
      <p>{result}</p>
    </div>
  );
};

export default Box;
