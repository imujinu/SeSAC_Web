import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080", { autoConnect: false });
export default function Practice1() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };
  useEffect(() => {
    initSocketConnect();

    //이벤트 핸들러 중복 등록될 수 있기 때문에 useEffect 안에서 작성해야함함
    socket.on("bye2", (str) => {
      serFromServerString(str);
    });
    socket.on("study2", (str) => {
      serFromServerString(str);
    });
    socket.on("hello2", (str) => {
      serFromServerString(str);
    });
    return () => {
      socket.off("bye2");
      socket.off("study2");
      socket.off("hello2");
    };
  }, []);
  const events = ["bye", "study", "hello"];

  const emitToServer = (eventName) => {
    socket.emit(eventName, eventName);
  };

  const [fromServerString, serFromServerString] = useState("");
  return (
    <>
      <h1>Hello world!</h1>
      {events.map((event) => (
        <button
          key={event}
          onClick={(e) => {
            emitToServer(event);
          }}
        >
          {event}
        </button>
      ))}
      <h3>{fromServerString}</h3>
    </>
  );
}
