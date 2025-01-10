export default function Input({ setData }) {
  //   console.log(setData);
  const handleChange = (e) => {
    //   fruit: "apple",
    //   background: "white",
    //   color: "black",
    //   content: "text",
    console.log(e.target);
    // console.log(e.currentTarget); 등록이 일어나는 input
    setData((prevState) => {
      return { ...prevState, content: e.target.value };
    });
  };
  return (
    <div>
      내용:{" "}
      <input
        type="text"
        placeholder="내용을 입력하세요."
        onChange={handleChange}
      />
    </div>
  );
}
