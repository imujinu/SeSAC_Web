import CustomHook from "./components/CustomHook";
import Form from "./components/Form";
import UseMemo from "./components/practice/UseMemo";
import User from "./components/practice/User";
import UseCallbackEx1 from "./components/UseCallbackEx1";
import UseCallbackEx2 from "./components/UseCallbackEx2";
import UseMemo1 from "./components/UseMemo1";
import UseMemoObj from "./components/UseMemoObj";
import UseReducer from "./components/UseRedeucer";
import useTitle from "./hooks/useTitle";
import UseCallback from "./components/practice/UseCallback";
import UseReducer2 from "./components/practice/UseReducer2";

function App() {
  useTitle("hook 배워보기");

  return (
    <>
      {/* <UseMemo1 />
      <UseMemoObj /> 
      <UseCallbackEx1 />
      <UseCallbackEx2 />
      <UseReducer />
      <CustomHook />t
      <Form />
      <UseMemo/>
      <UseCallback />
      */}
      {/* <User /> */}
      <UseReducer2 />
    </>
  );
}

export default App;
