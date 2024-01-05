Feature: Cập nhật Avatar

  Scenario: Cập nhật Avatar thành công
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Đổi avatar'
    # Then Màn hình hiển thị đầy đủ thông tin để 'Đổi avatar'
    When Tôi nhấn nút 'Chọn ảnh'
    When Tôi nhấn nút 'Cập nhật'
    # Then Thông tin 'Cập nhật' thành công, hiển thị alert thông báo