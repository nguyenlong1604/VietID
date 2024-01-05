const URL = "https://vietid.net/user/profile";
const UPDATE_AVATAR_BTN = "//span[contains(text(),'Đổi avatar')]";
const CHOOSE_A_PHOTO_BTN = "//button[contains(text(),'Chọn ảnh')]";
const CANCEL_IMG_BTN = "//button[contains(text(),'Hủy bỏ')]";
const UPLOAD_IMG_BTN = "//button[contains(text(),'Cập nhật')]";

export default class UpdateAvatar {
    get getURL() {
        return URL;
    }

    get getUpdate_Avatar_BTN () {
        return UPDATE_AVATAR_BTN
    }

    get getChoose_A_Photo_BTN () {
        return CHOOSE_A_PHOTO_BTN
    }

    get getCancel_IMG_BTN () {
        return CANCEL_IMG_BTN
    }

    get getUpload_IMG_BTN () {
        return UPLOAD_IMG_BTN
    }
}
