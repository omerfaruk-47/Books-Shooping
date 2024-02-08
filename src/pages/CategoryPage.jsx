import { NavLink, Navigate, Outlet } from "react-router-dom";

const CategoryPage = () => {
  //const navigate = useNavigate();

  //örnek: kullanıcı giriş yapmışsa sayfayı göster
  //veya sadece user adminse outleti ekrana bas
  const user = {
    name: "ömer",
    type: "user",
  };

  if (user.type !== "admin") {
    //kullanıcı tipi admin değilse bu sayfayı gösterme kullanıcıyı
    // anasayfaya yönlerdir
    //? 1) hook kullanımı
    //react uyarı verdiği için kullanmadık
    //navigate('/');
    //? 2) bileşen kullanımı
    //return <Navigate to={"/"} replace />;
  }

  return (
    <div className="d-flex align-items-center gap-4 p-5">
      <aside className="d-flex flex-column bg-white p-5 rounded-4">
        <NavLink to={"/kategori/hikaye"}>Hikaye</NavLink>
        <NavLink to={"/kategori/roman"}>Roman</NavLink>
      </aside>

      {/* ASIL SAYFA İÇERİĞİ
      
      * Alt route'un kapsayıcı route içerisinde hangi noktada ekrana
      * yazılması gerektiğini belirten bir özellik.
      */}

      <Outlet />
    </div>
  );
};

export default CategoryPage;
