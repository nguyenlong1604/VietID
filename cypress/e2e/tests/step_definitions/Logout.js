import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LogoutUI from "../../page/LogoutUI";

const Logout = new LogoutUI();

When("Người dùng chọn tùy chọn button 'Avatar'", () => {
    cy.xpath(Logout.getAvatar_CLICK).click();
});

Then("Màn hình hiển thị đầy đủ thông tin của 'Avatar'", () => {
    cy.url().should("contain", Logout.getURL);
    cy.xpath("//li[@class='user-dropdown-first-info-name']").should("be.visible")
    cy.xpath("//li[@class='user-dropdown-first-info-email']").should("be.visible")
    cy.xpath("//a[contains(text(),'Thêm tài khoản')]").should("be.visible")
    cy.xpath("//a[@id='logout-click']").should("be.visible")
})

When("Người dùng chọn 'Đăng xuất'", () => {
    cy.xpath(Logout.getLogout_CLICK).click();
});