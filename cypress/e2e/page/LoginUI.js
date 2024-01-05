const URLACC = "https://vietid.net/login"
const USERNAME = "#account"
const NEXT_BUTTON = ".index-login"
const ERR_ACC = "//p[@id='err-login']"
const URLPASS = "https://vietid.net/login/enterPassword";
const PASSWORD = "input[name='password']";
const ERR_PASS = "//div[@class='warning error-message']"
const BTN_LOGIN = ".index-login";

export default class Login {
    getURL_ACC() {
        return URLACC;
    }

    getUserName() {
        return USERNAME;
    }

    getNextButton() {
        return NEXT_BUTTON;
    }

    getERR_ACC() {
        return ERR_ACC;
    }

    getURL_PASS() {
        return URLPASS;
    }

    getPassWord() {
        return PASSWORD;
    }

    getERR_PASS() {
        return ERR_PASS;
    }

    getBTN_Login() {
        return BTN_LOGIN;
    }
}
