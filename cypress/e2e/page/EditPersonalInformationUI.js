const URL = "https://vietid.net/user/profile"
const EDIT_BTN = "//a[contains(text(),'Chỉnh sửa')]";
const FULLNAME_INPUT = "input[name='fullname']";
const GENDER_SELECT = "#gender";
const BIRTHDATE_INPUT = ".react-datepicker__input-container input";
const ADDRESS_INPUT = "input[name='address']";
const JOB_INPUT = "input[name='job']"
const CHANGE_BTN= "//button[contains(text(),'THAY ĐỔI')]";
const CANCEL_BTN = ".btn.btnblue.center"
const ERR_UPDATE = "//p[@id='err-update']"

export default class EditPersonalInformation {
    get getURL() {
        return URL;
    }
    get getEdit_BTN() {
        return EDIT_BTN;
    }

    get getfullNameInput() {
        return (FULLNAME_INPUT);
    }

    get getgenderSelect() {
        return (GENDER_SELECT);
    }

    get getbirthDateInput() {
        return (BIRTHDATE_INPUT);
    }

    get getaddressInput() {
        return (ADDRESS_INPUT);
    }

    get getjobInput() {
        return (JOB_INPUT);
    }

    get getChange_BTN () {
        return CHANGE_BTN;
    }

    get getCancelButton() {
        return (CANCEL_BTN);
    }

    get getERR_Update () {
        return (ERR_UPDATE)
    }
}
