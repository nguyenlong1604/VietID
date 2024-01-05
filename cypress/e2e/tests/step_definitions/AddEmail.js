/*
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AddEmailUI from "../../page/AddEmailUI";
import {faker} from '@faker-js/faker';

const AddEmail = new AddEmailUI();

Then("Màn hình hiển thị đầy đủ thông tin Profile người dùng", () => {
    cy.url().should("contain", AddEmail.getURL);//tesst
});

When("Người dùng chọn tùy chọn 'Thêm Email'", () => {
    cy.get(AddEmail.getAddEmail).click({force:true});
});

When("Tôi Nhập địa chỉ email mới theo fakeer data mockup", () => {
    let emailinput = faker.internet.email();
    cy.get(AddEmail.getEmailInput).type(emailinput);
});

When("Cập nhật Email mới thành công", () => {
    cy.xpath(AddEmail.getBTN_Update).click();
});
*/