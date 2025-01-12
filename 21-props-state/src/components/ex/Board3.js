import { useState } from "react";

export default function Board3() {
  const [user, SetUser] = useState([
    { name: "진우", title: "안녕하세요" },
    { name: "우진", title: "안녕안해요" },
  ]);

  const [writer, setWriter] = useState("");
  const [title2, setTitle2] = useState("");
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("name");
  const [text, setText] = useState("");
  const write = () => {
    let newUser = {
      name: writer,
      title: title2,
    };
    SetUser((prevState) => {
      return [...prevState, newUser];
    });
    // SetUser([...user, newUser]);
    setWriter("");
    setTitle2("");
  };

  const search2 = () => {
    let searchResult = user.filter((el) => {
      if (!el[search].includes(text)) {
        return null;
      }

      return el;
      //   if (el[search].includes(text)) {
      //     return el;
      //   } else {
      //     return null;
      //   }
    });

    setSearch("");
    setResult(searchResult);
  };

  const all = () => {
    let searchResult = [...user];
    setResult(searchResult);
  };
  return (
    <div>
      <fieldset>
        <form>
          작성자 :{" "}
          <input
            type="writer"
            placeholder="작성자"
            value={writer}
            onChange={(e) => {
              setWriter(e.target.value);
            }}
          />
          제목 :{" "}
          <input
            type="title"
            value={title2}
            onChange={(e) => {
              setTitle2(e.target.value);
            }}
          />
          <button type="button" onClick={write}>
            작성
          </button>
        </form>
      </fieldset>
      <div>
        <form>
          <select
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          >
            <option value={"name"}>작성자</option>
            <option value={"title"}>제목</option>
          </select>
          <input
            type="text"
            placeholder="검색어"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button type="button" onClick={search2}>
            검색
          </button>
          <button type="button" onClick={all}>
            전체
          </button>
        </form>
      </div>
      <div>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목 </th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {user.map((el, i) => {
            return (
              <tr key={i + 1}>
                <td>{i + 1}</td>
                <td>{el.title}</td>
                <td>{el.name}</td>
              </tr>
            );
          })}
        </tbody>
      </div>

      <div>
        {result.length == 0 ? (
          <h3>검색 결과가 없어요</h3>
        ) : (
          <table>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
              </tr>
            </thead>
            <tbody>
              {result.map((el, i) => {
                return (
                  <tr key={i + 1}>
                    <td>{i + 1}</td>
                    <td>{el.title}</td>
                    <td>{el.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
