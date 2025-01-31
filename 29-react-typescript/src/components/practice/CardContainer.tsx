import { MatzipInterface } from "../../types/interface";
import Card from "./Card";

interface Props {
  isShowContent: boolean;
  matzipArr: MatzipInterface[];
}
export default function CardContainer({ isShowContent, matzipArr }: Props) {
  return (
    <>
      {isShowContent &&
        matzipArr.map((el) => {
          return (
            <Card
              imgSrc={el.imgSrc}
              title={el.title}
              desc={el.desc}
              key={el.idx}
            />
          );
        })}
    </>
  );
}
