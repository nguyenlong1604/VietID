const URLACC = "https://vietid.net/login"
const USERNAME = "#account"
const NEXT_BUTTON = ".index-login"
const ERR_ACC = "//p[@id='err-login']"
const URLPASS = "https://vietid.net/login/enterPassword";
const PASSWORD = "input[name='password']";
const ERR_PASS = "//div[@class='warning error-message']"
const BTN_LOGIN = ".index-login";

export default class Login {
    get getURL_ACC() {
        return URLACC;
    }

    get getUserName() {
        return USERNAME;
    }

    get getNextButton() {
        return NEXT_BUTTON;
    }

    get getERR_ACC() {
        return ERR_ACC;
    }

    get getURL_PASS() {
        return URLPASS;
    }

    get getPassWord() {
        return PASSWORD;
    }

    get getERR_PASS() {
        return ERR_PASS;
    }

    get getBTN_Login() {
        return BTN_LOGIN;
    }
}
