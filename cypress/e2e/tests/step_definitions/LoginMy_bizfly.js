import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import LoginMy_bizflyUI from "../../page/LoginMy_bizflyUI";

const loginPage = new LoginMy_bizflyUI();

Given("Tôi đã mở trang đăng nhập My_bizfly", function () {
  cy.visit(loginPage.url, { timeout: 30000 });
});

When("Tôi nhập tài khoản {string}", (username) => {
  if (username) {
    cy.iframe().find(loginPage.usernameInput)
      .click({ force: true })
      .clear()
      .type(username);
  }
});



// .clear()
// .should("be.enabled")
// .should('have.value', usernameInput)
// .and('have.value', usernameInput);

// Then("Thông tin vừa nhập được hiển thị vào textbox usernamee", () => {
//   cy.url().should("contain", Login.getURL);
//   cy.get(LoginMy_bizfly.getUserName).should('have.value', username);
// });

// When("Tôi nhấn nút 'Tiếp tục'", () => {
//   cy.get(LoginMy_bizfly.getNextButton).click();
// });

// Then("Màn hình hiển thị đầy đủ thông tin để Nhập mật khẩuu", () => {
//   cy.url().should("contain", Login.getURL);
// //   cy.xpath("//li[@class='one']").should("be.visible").and("contain", "Chỉ cần duy nhất một tài khoản ViệtID !")
// //   cy.xpath("//li[@class='two']").should("be.visible").and("contain", "Bạn có thể đăng nhập các website & các ứng dụng trên di động")
//   cy.get(LoginMy_bizfly.getPassWord).should("be.enabled")
//   cy.get(LoginMy_bizfly.getBTN_Login).should("be.visible")

// });

// When("Tôi nhập mật khẩuu {string}", (pass) => {
//   password = pass;
//   //if (pass)
//   cy.get(LoginMy_bizfly.getPassWord).clear();
//   if (password) {
//     cy.get(LoginMy_bizfly.getPassWord).should("be.enabled").type(password).should('have.value', password).and('have.value', password);
//   }
// });

// Then("Thông tin vừa nhập được hiển thị vào textbox mật khẩuu", () => {
//   cy.url().should("contain", LoginMy_bizfly.getURL);
//   cy.get(LoginMy_bizfly.getPassWord).should('have.value', password);
// });

// When("Tôi nhấn nút 'Đăng nhập bằng ViệtID'", () => {
//   cy.get(LoginMy_bizfly.getBTN_Login).click();
// });

// Then("Tôi nhìn thấy trang GiaiPhap", () => {
//   cy.url().should("contain", "https://my.bizfly.vn/giai-phap");
// });