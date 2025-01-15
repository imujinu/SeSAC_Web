// import "../../style/Trip.scss";

export default function Trip() {
  return (
    <div className="container">
      <div>
        <img
          src={process.env.PUBLIC_URL + "/images/1.jpg"}
          alt=""
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/images/2.jpg"}
          alt=""
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/images/3.jpg"}
          alt=""
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/images/4.jpg"}
          alt=""
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/images/5.jpg"}
          alt=""
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
}
