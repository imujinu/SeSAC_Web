import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import "./style/main.scss";
import Student from "./pages/Student";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/student/:student" element={<Student />}></Route>
        <Route path="/student/new" element={<Search></Search>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
