enum addresses {
  refreshToken = "/refreshToken",
  registerUser = "/users/signup ",
  //====== auth
  userLogin = "/user/login",
  userRegister = "/user/register",
  adminLogin = "/admin/login",
  adminRegister = "/admin/register",
  userValidate = "/user/validate",
  //====== app
  createApp = "/app",
  getApp = "/app",
  getAppDetails = "/app",
  setAppSectionsAsArray = "/app/section/array",
  editSection = "/app/section",
  //====== images
  setImage = "/images",
  //====== gallery
  makeGallery = "/gallery",
}

export default addresses;
