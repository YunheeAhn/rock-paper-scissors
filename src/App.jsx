import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 가위바위보 게임
// 1. 박스 2개(타이틀,사진, 결과)
// 2. 버튼 3개(가위, 바위, 보)
// 3. 버튼 클릭시 클릭 한 값이 박스에 보임
// 4. 컴퓨터는 랜덤으로 값이 정해짐
// 5. 3번과 4번의 결과를 갖고 누가 이겼는지 승패를 확인한다
// 6. 승패 결과에 따라 테두리 색이 변경(이기면-초록, 지면-빨강, 비기면-검정)

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

function App() {
  // 사용자 선택 상태
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <>
      <div className="main">
        <Box title="당신" item={userSelect} />

        <div className="btn_wrap">
          <button onClick={() => play("scissors")}>가위</button>
          <button onClick={() => play("rock")}>바위</button>
          <button onClick={() => play("paper")}>보</button>
        </div>

        {/* <Box title="컴퓨터" /> */}
      </div>
    </>
  );
}

export default App;
