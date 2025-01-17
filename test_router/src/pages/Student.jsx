import { useNavigate, useParams } from "react-router-dom";

export default function Student() {
  const { student } = useParams();
  const navigate = useNavigate();
  console.log(student);
  return (
    <div className="container">
      <div>학생의 이름은 {student}입니다.</div>
      <div>
        <button onClick={() => navigate(-1)}>이전페이지로</button>
      </div>
    </div>
  );
}
