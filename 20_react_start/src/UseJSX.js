export default function UseJSX() {
  //  return <h1>hello,react</h1>;

  //   1. inline style 사용해보기기
  //   const divStyle = {
  //     width: "100px",
  //     height: "100px",
  //     backgroundColor: "yellow",
  //     border: "1px solid gray",
  //     marginLeft: ".5rem",
  //     display: "inline-block",
  //   };

  //   return (
  //     <div>
  //       <div style={{ color: "#fff", backgroundColor: "red" }}>first</div>
  //       <div style={divStyle}>second</div>
  //       <div style={divStyle}>third</div>
  //     </div>
  //   );
  // 2. JS문법 사용해보기
  //   let isShow = false;
  //   let str = "allie";

  //   return (
  //     <div>
  //       <div style={{ backgroundColor: "red" }}>
  //         {isShow ? "isShow가 true일때 보임" : ""}
  //       </div>
  //       <div style={{ backgroundColor: "orange" }}>
  //         {/* isShow가 true라면 뒤에 문자열이 렌더링됨됨 */}
  //         {isShow && "isShow가 true일때 보임"}
  //       </div>
  //       <div style={{ backgroundColor: "yellow" }}>
  //         {!isShow ? "isShow가 false일때 보임" : ""}
  //       </div>
  //       <div style={{ backgroundColor: "green" }}>
  //         {/* isShow가 false라면 뒤에 문자열이 렌더링됨됨 */}
  //         {!isShow && "isShow가 false일때 보임"}
  //       </div>
  //       <div>{str}님 안녕하세요.</div>
  //     </div>
  //   );
  // 3. onClick 사용
  function myFunction() {
    alert("안녕 내 이름은 allie야");
  }

  function addNum(a, b) {
    alert(a + b);
  }
  const Pointer = { cursor: "pointer" };
  return (
    <div>
      <span onClick={myFunction} style={Pointer}>
        안녕하세요
      </span>
      <span onClick={() => myFunction()} style={Pointer}>
        안녕하세요
      </span>
      <br />
      <span onClick={() => addNum(8, 5)} style={Pointer}>
        8+5의 결과를 alert로 확인해보세요.
      </span>
    </div>
  );
}

// export default UseJSX
