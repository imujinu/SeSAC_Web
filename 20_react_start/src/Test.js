export default function Test() {
  const name = "심바";
  const animal = "포메라니안";
  const a = 200;
  const b = 100;
  return (
    <div>
      <h2>
        제 반려 동물의 이름은 <u>{name}</u>입니다.
      </h2>
      <h2>
        <u>{name}</u>는 {animal}입니다.
      </h2>

      <div>{3 + 5 == 8 ? "정답입니다" : "오답입니다!"}</div>
      <div>{a > b && "a가 b보다 큽니다."}</div>
    </div>
  );
}
