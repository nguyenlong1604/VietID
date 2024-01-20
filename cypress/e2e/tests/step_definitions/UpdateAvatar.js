import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import UpdateAvatarUI from "../../page/UpdateAvatarUI";

const UpdateAvatar = new UpdateAvatarUI();

When("Người dùng chọn tùy chọn 'Đổi avatar'", () => {
    cy.xpath(UpdateAvatar.getUpdate_Avatar_BTN).click();
});

Then("Màn hình hiển thị để 'Đổi avatar'", () => {
    cy.get(UpdateAvatar.getFile_Upload).selectFile("C:\\Users\\ACER\\OneDrive\\Máy tính\\DATN\\74605728-8e547a80-50c2-11ea-8549-b804ef9b4996.png", {force: true});
});

Then("Màn hình hiển thị để 'Đổi avatar' chọn ảnh 100kb", () => {
    cy.get(UpdateAvatar.getFile_Upload).selectFile("C:\\Users\\ACER\\OneDrive\\Máy tính\\DATN\\SamplePNGImage_100kbmb.png", {force: true});

})

Then("Màn hình hiển thị để 'Đổi avatar' chọn ảnh 1mb", () => {
    cy.get(UpdateAvatar.getFile_Upload).selectFile("C:\\Users\\ACER\\OneDrive\\Máy tính\\DATN\\SamplePNGImage_1mbmb.png", {force: true});

})

Then("Màn hình hiển thị để 'Đổi avatar' chọn ảnh 5mb", () => {
    cy.get(UpdateAvatar.getFile_Upload).selectFile("C:\\Users\\ACER\\OneDrive\\Máy tính\\DATN\\SamplePNGImage_5mbmb.png", {force: true});

})

Then("Màn hình hiển thị để 'Đổi avatar' chọn ảnh 10mb", () => {
    cy.get(UpdateAvatar.getFile_Upload).selectFile("C:\\Users\\ACER\\OneDrive\\Máy tính\\DATN\\SamplePNGImage_10mbmb.png", {force: true});

})

Then("Màn hình hiển thị để 'Đổi avatar' không chọn ảnh nào", () => {
    cy.get(UpdateAvatar.getFile_Upload),{force: true};
})

Then("Màn hình hiển thị để 'Đổi avatar' chọn định dạng word", () => {
    cy.get(UpdateAvatar.getFile_Upload).selectFile("C:\\Users\\ACER\\OneDrive\\Máy tính\\DATN\\20_1955010224_NguyenDucLong_19CN4.docx", {force: true});
})

When("Tôi nhấn nút 'Cập nhật'", () => {
    cy.xpath(UpdateAvatar.getUpload_IMG_BTN).click();
});

Then("Avatar 'Cập nhật' thành công", () => {
    cy.xpath(UpdateAvatar.getCheck_IMG).should("exist");
});

When("Tôi nhấn nút 'Hủy'", () => {
    cy.xpath(UpdateAvatar.getCancel_IMG_BTN).click();
})


