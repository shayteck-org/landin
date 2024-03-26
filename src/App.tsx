import { Link } from "react-router-dom";
import routes from "./config/routes/routes";

function App() {
  return (
    <div className="" id="">
      <header style={{ padding: 20 }}>
        <Link to={routes.find((r) => r.title === "main")?.path || "/"}>
          رفتن به صفحه نمایش
        </Link>
        {"  "}|{"  "}
        <Link to={routes.find((r) => r.title === "edit")?.path || "/"}>
          رفتن به صفحه ادیت
        </Link>
      </header>
      <main style={{ padding: 20 }}>
        <br />
        <br />
        <br />
        <h1>به لندین خوش آمدید</h1>
        <br />
        <small>لندینگ لندین در دست توسعه میباشد...</small>
      </main>
    </div>
  );
}

export default App;
