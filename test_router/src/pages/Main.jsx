import { Link, useSearchParams, useNavigate } from "react-router-dom";
export default function Main() {
  const style = { margin: "4px" };

  const [searchQuery, setSearchQuery] = useSearchParams();
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2>ReactRouter 실습</h2>
      <nav>
        <ul className="ul">
          <li style={style}>
            <Link to="student/sean">학생생</Link>
          </li>
          <li style={style}>
            <Link to="student/codingon">코딩온</Link>
          </li>
          <li style={style}>
            <Link
              to={`student/new?${searchQuery}`}
              onClick={() => {
                setSearchQuery({ name: "jisu" });
              }}
            >
              searchParams
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
