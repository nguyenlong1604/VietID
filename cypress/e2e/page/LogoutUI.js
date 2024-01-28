const URL = "https://vietid.net/user/profile"
const AVATAR = "//div[@class='user-click user-avatar floatright']"
const LOG_OUT = "//a[@id='logout-click']"

export default class Logout {
    get getURL() {
        return URL;
    }
    get getAvatarClick() {
        return AVATAR;
    }

    get getLogoutClick() {
        return LOG_OUT
    }
}