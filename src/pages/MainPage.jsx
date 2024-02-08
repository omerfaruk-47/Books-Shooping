import gif from "../assets/books.gif";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="container d-flex flex-column align-items-center gab-5">
      <h1>Hoşgeldiniz!</h1>

      {/* <img src="/books.gif" alt="" /> */}
      <img src={gif} alt="" className="gif" />
      <p>
        <Link to={"/ürünler"}>Ürünler Sayfasında </Link> Yeni çıkan bütün
        kitaplara ulaşabilirsiniz.
      </p>
    </div>
  );
};

export default MainPage;
