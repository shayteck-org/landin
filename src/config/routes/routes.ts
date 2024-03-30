import App from "@/App";
import EditPage from "@/pages/EditPage";
import MainPage from "@/pages/MainPage";
import SignInUser from "@/pages/SignIn";
import SignUpUser from "@/pages/Signup";
import ManagerLogin from "@/pages/manage";

const routes = [
  { title: "landing", path: "/", Component: App },
  { title: "main", path: "/main", Component: MainPage },
  { title: "edit", path: "/edit", Component: EditPage },
  { title: "manage", path: "/manage", Component: ManagerLogin },
  { title: "signin", path: "/signin", Component: SignInUser },
  { title: "signup", path: "/signup", Component: SignUpUser },
];
export default routes;

export const routesTitle = {
  landing: "صفحه اصلی",
  main: "صفحه کاربر",
  edit: "ویرایش",
  manage: "پنل مدیریت",
  signin: "ورود کاربر",
  signup: "ثبت نام کاربر",
};
