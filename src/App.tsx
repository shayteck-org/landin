import { Link } from "react-router-dom";
import routes, { routesTitle } from "./config/routes/routes";
import titleGenerator from "./common/titleGenerator/titleGenerator";

function App() {
  document.title = titleGenerator(routesTitle.landing);

  return (
    <div className="" id="">
      <header style={{ padding: 20 }}>
        <div
          style={{
            padding: 16,
            backgroundColor: "powderblue",
            width: "fit-content",
            borderRadius: 16,
          }}
        >
          <Link to={routes.find((r) => r.title === "main")?.path || "/"}>
            رفتن به صفحه نمایش
          </Link>
          {"  "}|{"  "}
          <Link to={routes.find((r) => r.title === "edit")?.path || "/"}>
            رفتن به صفحه ادیت
          </Link>
        </div>
        <br />
        <div
          style={{
            padding: 16,
            backgroundColor: "peachpuff",
            width: "fit-content",
            borderRadius: 16,
          }}
        >
          <Link to={routes.find((r) => r.title === "manage")?.path || "/"}>
            رفتن به پنل ادمین
          </Link>
          {"  "}|{"  "}
          <Link to={routes.find((r) => r.title === "signin")?.path || "/"}>
            رفتن به پنل کاربران
          </Link>
        </div>
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
