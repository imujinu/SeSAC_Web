import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./App";
import rootReducer from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

//3. store 설정
// module/index.js에서 통합한 rootReducer를 value로 전달
const store = configureStore({ reducer: rootReducer });

//4. app 컴포넌트 잣기 컴포넌트에서 사용 가능하도록
//store props로 store 전달달
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
