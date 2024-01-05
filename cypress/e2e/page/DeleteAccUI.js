const URL = "https://vietid.net/user/profile";
const DELETE_BTN = "//a[contains(text(),'Xóa tài khoản')]";
const CANCEL_BTN = "//a[contains(text(),'HỦY')]";
const AGREE_BTN = "//button[contains(text(),'ĐỒNG Ý')]";
const NOTIFICATION = "//div[@class='light-box-title']";
const CONTENT = "//div[@class='light-box-content center']";

export default class UpdatePass {
    get getURL() {
        return URL;
    }

    get getDelete_BTN() {
        return DELETE_BTN
    }

    get getCancel_BTN() {
        return CANCEL_BTN
    }

    get getAgree_BTN() {
        return AGREE_BTN
    }

    get getNotification() {
        return NOTIFICATION
    }

    get getContent() {
        return CONTENT
    }
}