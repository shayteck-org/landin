import { Link } from "react-router-dom";
import routes, { routesPath, routesTitle } from "./config/routes/routes";
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
          <Link to={routesPath.main}>رفتن به صفحه نمایش</Link>
          {"  "}|{"  "}
          <Link to={routesPath.edit}>رفتن به صفحه ادیت</Link>
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
          <Link to={routesPath.manage}>رفتن به پنل ادمین</Link>
          {"  "}|{"  "}
          <Link to={routesPath.signin}>رفتن به پنل کاربران</Link>
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
