import { useState } from "react";

export default function Board() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [result, setResult] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [type, setType] = useState("작성자");

  const register = () => {
    const newUser = {
      id: user.length == 0 ? 1 : user[user.length - 1].id + 1,
      name,
      title,
    };
    setUser([...user, newUser]);

    setName("");
    setTitle("");
  };

  const search = () => {
    let searchResult = user.filter((item) => {
      console.log(item);
    });
  };

  const entire = () => {
    setResult(...user);
  };
  return (
    <div>
      <div>
        <label htmlFor="write">
          작성자 :
          <input
            id="write"
            type="text"
            placeholder="작성자"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label htmlFor="text">
          제목 :
          <input
            type="text"
            id="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <button onClick={register}>작성</button>
      </div>
      <div>
        <select
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option>작성자</option>
          <option>제목</option>
          <option>번호</option>
        </select>
        <input
          type="title"
          placeholder="검색어"
          value={searchTitle}
          onChange={(e) => {
            setSearchTitle(e.target.value);
          }}
        ></input>
        <button onClick={search}>검색</button>
        <button onClick={entire}>전체</button>
      </div>

      <table border="1px solid black" cellSpacing={"0"}>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
        </tr>
        {user.map((el) => {
          return (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.name}</td>
              <td>{el.title}</td>
            </tr>
          );
        })}
      </table>
      <div>
        검색결과:
        <table>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
          {result.map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.title}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
