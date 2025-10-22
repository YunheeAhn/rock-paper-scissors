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
    <div className={`box ${!props.countdown && result}`}>
      <h1>{props.title}</h1>

      {/* 카운트 다운 중일 때는 숫자 표시 */}
      {props.countdown ? (
        <div className="countdown">
          <h2>{props.countdown}</h2>
        </div>
      ) : (
        <img src={props.item && props.item.img} alt="가위바위보" />
      )}

      {/* 카운트 다운 중일 때는 결과 표시 X */}
      {!props.countdown && <p>{result}</p>}
    </div>
  );
};

export default Box;
