import styled, { keyframes } from "styled-components";

const StyledContainer = styled.div`
  border: 1px solid gray;
  padding: 0.5rem;
  margin: 1rem 0;
`;

const H4Title = styled.h4`
  background-color: yellowgreen;

  /* 반응형 설정하기 */
  /* 세로방향 */
  @media screen and (max-width: 780px) and (orientation: portrait) {
    color: green;
  }
  /* 가로방향 */
  @media screen and (max-width: 780px) and (orientation: landscape) {
    color: red;
  }
`;

const Parent = styled.div`
  background-color: #444;
  display: flex;
`;

const rotate = keyframes`
0%{
    transform: rotate(0);
}
50%{
    transform: rotate(180deg);
    background-color: aliceblue;
}
100%{
    transform: rotate(360deg);
}

`;

//props 사용, hover, animation
const Child = styled.span`
  color: red;

  &:hover {
    /* color: white; */
    cursor: pointer;
    color: ${(props) => (props.color ? props.color : "white")};
    background-color: ${(props) => (props.bg ? props.bg : "yellow")};
    /* animation */
    animation: ${rotate} 1s linear infinite;
  }
`;
export default function StyledComponents() {
  return (
    <StyledContainer>
      <H4Title>Styled Component 이용</H4Title>
      <Parent>
        <Child>element1</Child>
        <Child color="blue" bg="black">
          element2
        </Child>
        <Child>element3</Child>
      </Parent>
    </StyledContainer>
  );
}
