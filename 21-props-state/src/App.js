import { ClassProps, ClassProps2 } from "./components/ClassProps";
import ClassState from "./components/ClassState";
import ClassTest from "./components/Classtest";
import {
  FunctionProps,
  FunctionProps2,
  FunctionProps3,
  FunctionProps4,
} from "./components/FunctionProps";

import FunctionState from "./components/FunctionState";
import FunctionTest from "./components/FunctionTest";
import SyntheticEvent from "./components/SyntheticEvent";
import Counter from "./components/Counter";
import Handler from "./components/ex/HandlerEx";
import Color from "./components/ex/Color";
import Visible from "./components/ex/Visible";
import Emoji from "./components/ex/Emogi";
import PororoObj from "./components/ex/ChangeObj";
import Fruit from "./components/ex/Fruit";
import EntirePractice from "./components/ex/EntirePractice";
import PropsMap from "./components/PropsMap";
import PropsMap2 from "./components/PropsMap2";
import Alphabet from "./components/ex/Alphabet";
import Email from "./components/ex/Email";
import Board from "./components/ex/Board";
import Board2 from "./components/ex/Board2";
function App() {
  const arr = [
    { name: "peach", krPrice: 10000, number: 5 },
    { name: "strawberry", krPrice: 15000, number: 1 },
    { name: "pear", krPrice: 5000, number: 3 },
    { name: "apple", krPrice: 20000, number: 15 },
  ];
  return (
    <div>
      {/* <h2>Props 사용</h2> */}
      {/* <h3>클래스형 props 사용해보기</h3>
      <ClassProps name="루피" color="pink" nickname="공주" />
      <ClassProps2
        name="루피"
        color="pink"
        nickname="공주"
        // fontColor="blue"
      />

      <h3>함수형 컴포넌트 props 사용해보기</h3>
      <FunctionProps name="사과" number={5} krPrice={10000} />
      <FunctionProps2 name="사과" number={5} krPrice={10000} />
      <FunctionProps3 name="샤인머스켓" number={1} krPrice={15000} />
      <FunctionProps4
        name="딸기"
        // number={1} krPrice={20000}
      >
        <span style={{ color: "red" }}>children 요소입니다!!!!!</span>
      </FunctionProps4> */}
      {/* 
      <h2>클래스형 State</h2>
      <ClassState />
      <h3>함수형 state </h3>
      <FunctionState />
      <ClassTest />
      <FunctionTest /> */}
      {/* <h2>event</h2>
      <SyntheticEvent />
      <Counter /> */}
      {/* <Handler />
      <Color />
      <Visible />
      <Emoji />
      <PororoObj />
      <Fruit />
      <EntirePractice /> */}
      {/* <PropsMap arr={arr} />
      <PropsMap2 arr={arr} />
      <PropsMap2 /> */}
      {/* <Alphabet /> */}
      {/* <Email />
      <Board /> */}
      <Board2 />
    </div>
  );
}

export default App;
