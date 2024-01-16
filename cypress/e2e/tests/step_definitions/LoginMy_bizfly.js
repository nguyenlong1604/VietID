import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginMy_bizflyUI from "../../page/LoginMy_bizflyUI";

const LoginMy_bizfly = new LoginMy_bizflyUI();
let username;
let password;

Given("Tôi đã mở trang đăng nhập My_bizfly", function () {
  cy.visit(LoginMy_bizfly.getURL);
  // cy.get("logo text-center m-b-10").should("be.visible")
  // cy.get("text-center font22 text-21273d font-Sarabun-SemiBold m-b-20").should("be.visible").and("contain", "Đăng nhập hệ thống giải pháp" - "Đây là nội dung văn bản bắt đầu trong phần tử ")
});

When("Tôi nhập tài khoản {string}", (user) => {
  username = user;
  //if (user)
  cy.xpath(LoginMy_bizfly.getUserName).clear();
  if (username) {
    cy.xpath(LoginMy_bizfly.getUserName).should("be.enabled").type(username).should('have.value', username).and('have.value', username);
  }
});

When("Tôi nhấn nút 'Tiếp tụcc'", () => {
  cy.get(LoginMy_bizfly.getNextButton).click();
});

Then("Tôi chuyển sang màn hình hiển thị nhập mật khẩuu", () => {
  cy.url().should("contain", LoginMy_bizfly.getURL_PASS);
});

Then("Màn hình hiển thị đầy đủ thông tin để Nhập mật khẩuu", () => {
  cy.url().should("contain", LoginMy_bizfly.getURL_PASS);
  // cy.xpath("//li[@class='one']").should("be.visible").and("contain", "Chỉ cần duy nhất một tài khoản ViệtID !")
  // cy.xpath("//li[@class='two']").should("be.visible").and("contain", "Bạn có thể đăng nhập các website & các ứng dụng trên di động")
  // cy.get(Login.getPassWord).should("be.enabled")
  // cy.get(Login.getBTN_Login).should("be.visible")

});

When("Tôi nhập mật khẩuu {string}", (pass) => {
  password = pass;
  //if (pass)
  cy.xpath(LoginMy_bizfly.getPassWord).clear();
  if (password) {
    cy.xpath(LoginMy_bizfly.getPassWord).should("be.enabled").type(password).should('have.value', password).and('have.value', password);
  }
});

Then("Thông tin vừa nhập được hiển thị vào textbox mật khẩuu", () => {
  cy.url().should("contain", LoginMy_bizfly.getURL_PASS);
  cy.xpath(LoginMy_bizfly.getPassWord).should('have.value', password);
});

When("Tôi nhấn nút 'Đăng nhập bằng ViệtID'", () => {
  cy.xpath(LoginMy_bizfly.getBTN_Login).click();
});

Then("Tôi nhìn thấy trang chủ My_bizfly", () => {
  cy.visit("https://my.bizfly.vn/")
});

// Then("Tôi nhìn thấy thông báo với lỗi tài khoản không tồn tại {string}", (errorMessage) => {
//   cy.xpath(LoginMy_bizfly.getERR_ACC).should("be.visible").contains(errorMessage);
// });




