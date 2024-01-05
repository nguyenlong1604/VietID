import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DeleteAccUI from "../../page/DeleteAccUI";

const DeleteAcc = new DeleteAccUI();

When("Người dùng chọn tùy chọn 'Xóa tài khoản'", () => {
    cy.xpath(DeleteAcc.getDelete_BTN).click();
});

Then("Màn hình hiển thị đầy đủ thông tin thông tin Xóa tài khoản", () => {
    cy.url().should("contain", DeleteAcc.getURL);
    cy.xpath(DeleteAcc.getNotification).should("be.visible").and("contain", "Thông báo");
    cy.xpath(DeleteAcc.getContent).should("be.visible").and("contain", "Bạn có chắc chắn muốn xóa tài khoản?Thao tác này không thể hoàn tác, toàn bộ thông tin đều được xóa trên hệ thống.");
    cy.xpath(DeleteAcc.getAgree_BTN).should("be.visible")
    cy.xpath(DeleteAcc.getCancel_BTN).should("be.visible")
})

When("Tôi nhấn nút 'ĐỒNG Ý'", () => {
    cy.xpath(DeleteAcc.getAgree_BTN).click();
});

Then("Tôi quay lại trang chủ", () => {
    cy.url().should("contain", "https://vietid.net/login/chooseAccount");
});

When("Tôi nhấn nút 'HỦY'", () => {
    cy.xpath(DeleteAcc.getCancel_BTN).click();
});

