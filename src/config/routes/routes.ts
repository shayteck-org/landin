import App from "@/App";
import EditPage from "@/pages/EditPage";
import EditUserApp from "@/pages/EditUserApp";
import MainPage from "@/pages/MainPage";
import SignInUser from "@/pages/SignIn";
import SignUpUser from "@/pages/Signup";
import CreateAppForUser from "@/pages/createApp";
import GetAppInfo from "@/pages/getAppInfo";
import ManagerLogin from "@/pages/manage";

const routes = [
  { title: "landing", path: "/", Component: App },
  { title: "main", path: "/main", Component: MainPage },
  { title: "edit", path: "/edit", Component: EditPage },
  { title: "manage", path: "/manage", Component: ManagerLogin },
  { title: "signin", path: "/signin", Component: SignInUser },
  { title: "signup", path: "/signup", Component: SignUpUser },
  { title: "create", path: "/app", Component: CreateAppForUser },
  { title: "site", path: "/webapp", Component: GetAppInfo },
  { title: "editSite", path: "/edit/webapp", Component: EditUserApp },
];
export default routes;

export const routesTitle = {
  landing: "صفحه اصلی",
  main: "صفحه کاربر",
  edit: "ویرایش",
  manage: "پنل مدیریت",
  signin: "ورود کاربر",
  signup: "ثبت نام کاربر",
  createApp: "ساخت اپلیکیشن",
  site: "سایت من",
  editSite: "ویرایش سایت من",
};

export const routesPath = {
  landing: "/",
  main: "/main",
  edit: "/edit",
  manage: "/manage",
  signin: "/signin",
  signup: "/signup",
  createApp: "/app",
  site: "/webapp",
  editSite: "/edit/webapp",
};
