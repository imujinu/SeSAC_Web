import { useNavigate, useSearchParams } from "react-router-dom";

export default function Search() {
  const [searchQuery, setSearchQuery] = useSearchParams();

  const name = searchQuery.get("name");

  //   console.log(searchQuery.get("name"));
  const navigate = useNavigate();

  return (
    <div className="container">
      <div>학생의 이름은 new입니다</div>
      <div>실제 이름은 {name}입니다</div>
      <div onClick={() => navigate(-1)}>
        <button>이전페이지로</button>
      </div>
    </div>
  );
}
