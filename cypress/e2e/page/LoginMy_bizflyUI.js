const LOGIN_URL = "https://my.bizfly.vn/login";
const USERNAME_INPUT = 'iframe#embed_login input.form-control[name="account"]';

export default class LoginMy_bizfly {
  get url() {
    return LOGIN_URL;
  }

  get usernameInput() {
    return USERNAME_INPUT;
  }
}


// get getNextButton() {
//     return NEXT_BUTTON;
// }

// get getERR_ACC() {
//     return ERR_ACC;
// }

// get getPassWord() {
//     return PASSWORD;
// }

// get getERR_PASS() {
//     return ERR_PASS;
// }

// get getBTN_Login() {
//     return BTN_LOGIN;
// }
// const NEXT_BUTTON = "//div[@id='loginForm']//button[@class='btn btn-block btn-blue font-Sarabun-Bold font16 btn-next-icon']";
// const ERR_ACC = "//div[@class='warning error-message']//span[@class='text-danger']";
// const PASSWORD = "//input[@id='show-pass']";
// const ERR_PASS = "//div[@class='warning error-message']//span[@class='text-danger']";
// const BTN_LOGIN = "//button[@class='btn btn-block btn-blue font-Sarabun-Bold font16 btn-enter-pass' and text()='Đăng nhập bằng ViệtID']";
