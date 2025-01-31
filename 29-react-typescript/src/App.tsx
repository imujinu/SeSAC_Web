import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Lecture2 from "./pages/Lecture2";
import Practice from "./pages/Practice";
import PostList from "./components/practice/PostList";
import Matzip from "./pages/Matzip";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lecture" element={<Lecture2 />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/practice/codingon" element={<PostList />} />
        <Route path="/practice/Matzip" element={<Matzip />} />
      </Routes>
    </div>
  );
}

export default App;
