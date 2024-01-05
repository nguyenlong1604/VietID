const URL = "https://vietid.net/user/profile";
const UPDATE_BTN = "//a[contains(text(),'Cập nhật')]";
const ENTER_OLD_PASSWORD_INPUT = "//input[@name='old_password']";
const NEW_PASSWORD_INPUT = "//input[@id='new_password']";
const CONFIRM_NEW_PASSWORD_INPUT = "//input[@id='confirm_password']";
const CHANGE_BTN = "//button[contains(text(),'THAY ĐỔI')]";
const CANCEL_BTN = "//button[contains(text(),'HỦY BỎ')]"
const ERR_MSG = "//p[@id='err-changepass']"
const OK = "//input[@value='OK']"

export default class UpdatePass {
    get getURL() {
        return URL;
    }

    get getUpdate_BTN() {
        return UPDATE_BTN
    }

    get getEnter_Old_Password_Input() {
        return ENTER_OLD_PASSWORD_INPUT
    }

    get getNew_Password_Input() {
        return NEW_PASSWORD_INPUT
    }

    get getConfirm_New_Password_Input() {
        return CONFIRM_NEW_PASSWORD_INPUT
    }

    get getChange_BTN() {
        return CHANGE_BTN
    }

    get getCancel_BTN() {
        return CANCEL_BTN
    }

    get getErr_MSG () {
        return ERR_MSG
    }

    get getOK () {
        return OK
    }
}
