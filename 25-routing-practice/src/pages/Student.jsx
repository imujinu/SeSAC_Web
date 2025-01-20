import { useParams } from "react-router-dom";
export default function Student() {
  const params = useParams();
  return (
    <main>
      <div>
        <p>학생 이름은 {params.name} 입니다.</p>
        <p>실제 이름은 ~~입니다.</p>
      </div>
      <h1>Student 페이지</h1>
    </main>
  );
}
