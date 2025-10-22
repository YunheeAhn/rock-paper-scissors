import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 가위바위보 게임
// 1. 박스 2개(타이틀,사진, 결과)
// 2. 버튼 3개(가위, 바위, 보)
// 3. 버튼 클릭시 클릭 한 값이 박스에 보임
// 4. 컴퓨터는 랜덤으로 값이 정해짐
// 5. 3번과 4번의 결과를 갖고 누가 이겼는지 승패를 확인한다
// 6. 승패 결과에 따라 테두리 색이 변경(이기면-파랑, 지면-빨강, 비기면-검정)

// 박스는 컴포넌트로 따로 생성

// 선택지
const choice = {
  rock: {
    name: "바위",
    img: "https://cdn-icons-png.flaticon.com/512/5773/5773204.png",
  },
  paper: {
    name: "보",
    img: "https://cdn-icons-png.flaticon.com/512/8710/8710182.png",
  },
  scissors: {
    name: "가위",
    img: "https://cdn-icons-png.flaticon.com/512/4301/4301274.png",
  },
};

// 초기 이미지 설정
const defaultImage = "https://cdn-icons-png.flaticon.com/512/3524/3524335.png";

function App() {
  // 사용자 선택 상태
  const [userSelect, setUserSelect] = useState({ name: "", img: defaultImage });
  // 컴퓨터 선택 상태
  const [comSelect, setComSelect] = useState({ name: "", img: defaultImage });
  // 승패 상태
  const [result, setResult] = useState("");
  // 클릭시 3초 카운트다운
  const [countdown, setCountdown] = useState(null); // 3,2,1 후 결과 표시
  // 카운트다운 실행 상태
  const [isCounting, setIsCounting] = useState(false); // 처음엔 실행X

  const play = (userChoice) => {
    // play 함수가 실행되면 카운트다운 시작, 아니라면 시작X, 중복 방지
    if (isCounting) return; // 이미 카운트다운 중이면 무시

    setIsCounting(true);
    setCountdown(3);
    let count = 3;

    const countdownInterval = setInterval(() => {
      count -= 1;
      setCountdown(count);

      if (count > 0) {
        // 카운트 숫자가 3,2,1일때
        setCountdown(count);
      } else {
        // 카운트 숫자가 0이 되면
        clearInterval(countdownInterval);
        setIsCounting(false);
        setCountdown(null);

        // 사용자 선택
        setUserSelect(choice[userChoice]);

        // 컴퓨터 선택
        let comChoice = randomChoice();
        setComSelect(comChoice);

        // 승패 판단
        // 사용자가 선택한 값과 컴퓨터가 선택한 값을 전달
        setResult(judgement(choice[userChoice], comChoice));
      }
    }, 1000);

    // // 사용자 선택
    // setUserSelect(choice[userChoice]);

    // // 컴퓨터 선택
    // let comChoice = randomChoice();
    // setComSelect(comChoice);

    // // 승패 판단
    // // 사용자가 선택한 값과 컴퓨터가 선택한 값을 전달
    // setResult(judgement(choice[userChoice], comChoice));
  };

  // 컴퓨터의 가위,바위,보 랜덤 선택 함수
  const randomChoice = () => {
    // choice 객체의 키값을 배열로 변환
    let itemArray = Object.keys(choice); // ['rock','paper','scissors'], 객체의 키값만 뽑아서 배열로 반환
    //
    let randomItem = Math.floor(Math.random() * itemArray.length);

    // 랜덤으로 선택된 가위,바위,보
    let final = itemArray[randomItem];
    // choice 객체에서 최종 선택된 값 반환
    return choice[final];
  };

  // 승패 판단 함수
  const judgement = (user, com) => {
    // 비긴 경우
    if (user.name === com.name) {
      return "tie";
    } else if (user.name === "바위") return com.name === "가위" ? "win" : "lose";
    else if (user.name === "가위") return com.name === "보" ? "win" : "lose";
    else if (user.name === "보") return com.name === "바위" ? "win" : "lose";
    else return "lose";
  };

  //초기화
  const resetGame = () => {
    setUserSelect({ name: "", img: defaultImage });
    setComSelect({ name: "", img: defaultImage });
    setResult("");
  };

  // 몇 대 몇인지 카운팅하기

  return (
    <>
      <div className="main">
        <Box title="당신" item={userSelect} result={result} countdown={countdown} />

        <div className="btn_wrap">
          <button onClick={() => play("scissors")}>가위</button>
          <button onClick={() => play("rock")}>바위</button>
          <button onClick={() => play("paper")}>보</button>
          {userSelect.name && (
            <button onClick={resetGame} className="reset">
              다시하기
            </button>
          )}
        </div>

        <Box title="컴퓨터" item={comSelect} result={result} countdown={countdown} />
      </div>

      <div className="explain">
        <p>
          버튼을 클릭하여 가위, 바위, 보 중 하나를 선택하세요. <br />
          컴퓨터는 랜덤으로 선택합니다.
        </p>
      </div>
    </>
  );
}

export default App;
