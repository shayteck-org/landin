enum addresses {
  refreshToken = "/User/refreshToken",
  registerUser = "/User/users/signup ",
  //====== auth
  userLogin = "/User/user/login",
  userRegister = "/User/user/register",
  adminLogin = "/User/admin/user/login",
  adminRegister = "/User/admin/user/register",
  userValidate = "/User/user/validate",
  //====== app
  createApp = "/Core/landing/app",
  getApp = "/Core/landing/app",
  getAppDetails = "/Core/landing/app",
  setAppSectionsAsArray = "/Core/landing/app/section/array",
  editSection = "/Core/landing/app/section",
  //====== images
  setImage = "/Core/landing/images",
  //====== gallery
  makeGallery = "/Core/landing/gallery",
}

export default addresses;
