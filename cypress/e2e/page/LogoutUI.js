const URL = "https://vietid.net/user/profile"
const AVATAR = "//div[@class='user-click user-avatar floatright']"
const LOG_OUT = "//a[@id='logout-click']"

export default class Logout {
    get getURL() {
        return URL;
    }
    get getAvatar_CLICK() {
        return AVATAR;
    }

    get getLogout_CLICK() {
        return LOG_OUT
    }
}