export default function Select1({ setData }) {
  const fruit = (e) => {
    setData((prevState) => {
      return { ...prevState, fruit: e.target.value };
    });
  };

  return (
    <div>
      <select onChange={fruit}>
        <option value="apple">사과</option>
        <option value="grape">포도</option>
        <option></option>
        <option></option>
      </select>
      <select>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
      </select>
      <select>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
      </select>
    </div>
  );
}
