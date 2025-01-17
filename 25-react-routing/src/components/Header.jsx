import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="Header">
      <span>logo</span>
      <div>
        <Link to={"/"} className="menu=Item">
          홈
        </Link>
        <Link to={"/test"} className="menu=Item">
          테스트
        </Link>
        <Link to={"/products"} className="menu=Item">
          product
        </Link>
      </div>
    </header>
  );
}
