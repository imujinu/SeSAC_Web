import {
  PropsType3,
  PropsTypes1,
  PropsTypes2,
} from "../components/lecture/PropsTypes";

import EventObj from "../components/lecture/EventObj";
import SetText from "../components/lecture/SetText";
import Container from "../components/lecture/Container";
import TodoList from "../components/lecture/TodoList";

export default function Lecture2() {
  return (
    <main>
      <PropsTypes1 name="jinwoo"></PropsTypes1>
      <PropsTypes2 width="100px" color="red" height="100px" />
      <PropsType3 width="100px" height="50px" text="hi" color="red" />
      <Container>
        <SetText />
        <EventObj />
        <TodoList />
      </Container>
    </main>
  );
}
