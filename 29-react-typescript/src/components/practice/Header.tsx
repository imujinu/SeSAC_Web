import { SetStateAction } from "react";
import styled from "styled-components";

const MHeader = styled.header`
  background-color: beige;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;

interface TextProps {
  textColor: boolean;
}
const Div = styled.div<TextProps>`
  width: 30%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: red;
  }

  color: ${(props: TextProps) => (props.textColor ? "red" : "black")};
`;

interface Props {
  mapo: boolean;
  gangdong: boolean;
  dobong: boolean;
  setMapo: React.Dispatch<SetStateAction<boolean>>;
  setDobong: (isShow: boolean) => void;
  setGangdong: (isShow: boolean) => void;
}
export default function Header(props: Props) {
  const { mapo, gangdong, dobong, setDobong, setMapo, setGangdong } = props;

  const setState = (func: (isShow: boolean) => void): void => {
    setDobong(false);
    setGangdong(false);
    setMapo(false);
    func(true);
  };
  return (
    <MHeader>
      <Div onClick={() => setState(setGangdong)} textColor={gangdong}>
        강동구
      </Div>
      <Div onClick={() => setState(setMapo)} textColor={mapo}>
        마포구
      </Div>
      <Div onClick={() => setState(setDobong)} textColor={dobong}>
        도봉구
      </Div>
    </MHeader>
  );
}
