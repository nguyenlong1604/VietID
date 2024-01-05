Feature: Xóa tài khoản

  Scenario: Hủy Xóa tài khoản thành công
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Xóa tài khoản'
    Then Màn hình hiển thị đầy đủ thông tin thông tin Xóa tài khoản
    When Tôi nhấn nút 'HỦY'
    Then Tôi nhìn thấy trang Profile
    
  Scenario: Xóa tài khoản thành công
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Xóa tài khoản'
    Then Màn hình hiển thị đầy đủ thông tin thông tin Xóa tài khoản
    When Tôi nhấn nút 'ĐỒNG Ý'
    Then Tôi quay lại trang chủ

