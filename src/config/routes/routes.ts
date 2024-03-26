import App from "@/App";
import EditPage from "@/pages/EditPage";
import MainPage from "@/pages/MainPage";

const routes = [
  { title: "landing", path: "/", Component: App },
  { title: "main", path: "/main", Component: MainPage },
  { title: "edit", path: "/edit", Component: EditPage },
  { title: "signup", path: "/signup", Component: null },
];
export default routes;
