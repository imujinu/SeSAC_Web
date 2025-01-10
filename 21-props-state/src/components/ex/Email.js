import { useState } from "react";

export default function Email() {
  const [user, setUser] = useState([
    {
      id: "1",
      name: "코디",
      email: "codi@gmail.com",
    },
    {
      id: "2",
      name: "윤소희",
      email: "yoonsohee@gmail.com",
    },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const register = () => {
    const newUser = user.concat({
      id: user.length == 0 ? 1 : user[user.length - 1].id + 1,
      name,
      email,
    });
    setUser(newUser);
    setName("");
    setEmail("");
  };
  const userDelete = (id) => {
    const info = user.filter((user) => {
      return user.id !== id;
    });
    setUser(info);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            register();
          }
        }}
      ></input>
      <button onClick={register}>등록</button>

      <ul style={{ listStyle: "none" }}>
        {user.map((el, i) => {
          return (
            <li
              key={el.id}
              onDoubleClick={() => {
                userDelete(el.id);
              }}
            >
              {el.name} : {el.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
