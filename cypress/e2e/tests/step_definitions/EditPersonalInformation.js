import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import EditPersonalInformationUI from "../../page/EditPersonalInformationUI";
import moment from 'moment';

const EditPersonalInformation = new EditPersonalInformationUI();

When("Người dùng chọn tùy chọn 'Chỉnh sửa'", () => {
    cy.xpath(EditPersonalInformation.getEdit_BTN).click();
});

Then("Tôi chuyển sang màn hình Chỉnh sửa thông tin tài khoản và Màn hình hiển thị đầy đủ thông tin", () => {
    cy.get(EditPersonalInformation.getfullNameInput).should("be.enabled");
    cy.get(EditPersonalInformation.getgenderSelect).should("be.enabled");
    cy.get(EditPersonalInformation.getbirthDateInput).should("be.enabled");
    cy.get(EditPersonalInformation.getaddressInput).should("be.enabled");
    cy.get(EditPersonalInformation.getjobInput).should("be.enabled");
});

When("Nhập thông tin hợp lệ vào form", function (dataTable) {
    dataTable.hashes().forEach(data => {
        cy.get(EditPersonalInformation.getfullNameInput).clear()
        cy.get(EditPersonalInformation.getbirthDateInput).clear()
        cy.xpath("//div[@class='popup']").click()
        cy.get(EditPersonalInformation.getaddressInput).clear()
        cy.get(EditPersonalInformation.getjobInput).clear()
        if (data.fullname) {
            cy.get(EditPersonalInformation.getfullNameInput).type(data.fullname).should('have.value', data.fullname).and('have.value', data.fullname);
        }
        if (data.sex) {
            cy.get(EditPersonalInformation.getgenderSelect).select(data.sex);
        }
        if (data.dateofbirth) {
            const formattedDate = moment(data.dateofbirth, "DD-MM-YYYY").format("DD-MM-YYYY");
            cy.get(EditPersonalInformation.getbirthDateInput).type(formattedDate).type('{enter}');
        }
        if (data.address) {
            cy.get(EditPersonalInformation.getaddressInput).type(data.address).should('have.value', data.address).and('have.value', data.address);
        }
        if (data.job) {
            cy.get(EditPersonalInformation.getjobInput).type(data.job).should('have.value', data.job).and('have.value', data.job);
        }
    });
});

When("Tôi bấm nút 'THAY ĐỔI'", () => {
    cy.xpath(EditPersonalInformation.getChange_BTN).click();
});

Then("Tôi nhận được alert thông báo 'Cập nhật thông tin tài khoản thành công'", () => {
    // cy.url().should("contain", EditPersonalInformation.getURL);
    cy.xpath("//div[@class='light-box-content center']")
        .should("be.visible")
        .and("contain", "Cập nhật thông tin tài khoản thành công");
    cy.xpath("//input[@value='OK']").click()
});

Then("Tôi nhìn thấy thông báo với lỗi khi để trống tất cả các trường trong form {string}", (errorMessage) => {
    cy.xpath(EditPersonalInformation.getERR_Update).should("be.visible").contains(errorMessage);
});

Then("Tôi nhìn thấy thông báo với lỗi khi chỉnh sửa họ tên của người dùng không thành công khi nhập vào trường với 3 ký tự là chữ hoa và chữ thường {string}", (errorMessage) => {
    cy.xpath(EditPersonalInformation.getERR_Update).should("be.visible").contains(errorMessage);
});

Then("Tôi nhìn thấy thông báo với lỗi khi chỉnh sửa họ tên của người dùng không thành công khi nhập vào trường với 51 ký tự là chữ hoa và chữ thường {string}", (errorMessage) => {
    cy.xpath(EditPersonalInformation.getERR_Update).should("be.visible").contains(errorMessage);
});

Then("Tôi nhìn thấy thông báo với lỗi khi khi nhập ký tự đặc biệt vào trường họ tên {string}", (errorMessage) => {
    cy.xpath(EditPersonalInformation.getERR_Update).should("be.visible").contains(errorMessage);
});

Then("Tôi nhìn thấy thông báo với lỗi khi khi để trống trường họ tên {string}", (errorMessage) => {
    cy.xpath(EditPersonalInformation.getERR_Update).should("be.visible").contains(errorMessage);
});

Then("Tôi nhìn thấy thông báo với lỗi khi chỉ nhập họ tên {string}", (errorMessage) => {
    cy.xpath(EditPersonalInformation.getERR_Update).should("be.visible").contains(errorMessage);
});

/*

sfshnfbjsdbdsdkbksdbfkdsnckjdsn ckjds

*/

/*
akhiiiiiiiiiiiiii
*/

/*
565+65+625625626
*/