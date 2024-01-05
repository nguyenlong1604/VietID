import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import UpdateAvatarUI from "../../page/UpdateAvatarUI";

const UpdateAvatar = new UpdateAvatarUI();

When("Người dùng chọn tùy chọn 'Đổi avatar'", () => {
    cy.xpath(UpdateAvatar.getUpdate_Avatar_BTN).click();
});

When("Tôi nhấn nút 'Chọn ảnh'", () => {
    cy.xpath(UpdateAvatar.getChoose_A_Photo_BTN).click()
    .selectFile("D:/AutomationTest/BMI/BMI.jpg").click();
    cy.get('.file-input').attachFile("D:/AutomationTest/BMI/BMI.jpg");

});

When("Tôi nhấn nút 'Cập nhật'", () => {
    cy.xpath(UpdateAvatar.getUpload_IMG_BTN).click()
});