import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LogoutUI from "../../page/LogoutUI";

const Logout = new LogoutUI();

When("Người dùng chọn tùy chọn button 'Avatar'", () => {
    cy.xpath(Logout.getAvatar_CLICK).click();
});

Then("Màn hình hiển thị đầy đủ thông tin của 'Avatar'", () => {
    cy.url().should("contain", Logout.getURL);
    cy.xpath("//li[@class='user-dropdown-first-info-name']").should("exist");
    cy.xpath("//li[@class='user-dropdown-first-info-email']").should("exist");
    cy.xpath("//a[contains(text(),'Thêm tài khoản')]").should("exist");
    cy.xpath("//a[@id='logout-click']").should("exist");
})

When("Người dùng chọn 'Đăng xuất'", () => {
    cy.xpath(Logout.getLogout_CLICK).click();
});

Then("Tôi nhìn thấy trang Đăng nhập tài khoản", () => {
    cy.url().should("contain", "https://vietid.net/login/chooseAccount");
});

When("Người dùng không chọn 'Đăng xuất'", () => {
    cy.xpath("//h3[contains(text(),'Thông tin bảo mật')]").click();
});