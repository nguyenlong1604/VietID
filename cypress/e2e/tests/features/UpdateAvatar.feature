Feature: Cập nhật Avatar

  Scenario: Cập nhật Avatar thành công
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Đổi avatar'
    Then Màn hình hiển thị để 'Đổi avatar'
    When Tôi nhấn nút 'Cập nhật'
    Then Avatar 'Cập nhật' thành công

  Scenario: Kiểm tra việc chọn ảnh mới 100kb avatar mới từ máy tính
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Đổi avatar'
    Then Màn hình hiển thị để 'Đổi avatar' chọn ảnh 100kb
    When Tôi nhấn nút 'Cập nhật'
    Then Avatar 'Cập nhật' thành công

  Scenario: Kiểm tra việc chọn ảnh mới 1mb avatar mới từ máy tính
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Đổi avatar'
    Then Màn hình hiển thị để 'Đổi avatar' chọn ảnh 1mb
    When Tôi nhấn nút 'Cập nhật'
    Then Avatar 'Cập nhật' thành công

  Scenario: Kiểm tra việc chọn ảnh mới 5mb avatar mới từ máy tính
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Đổi avatar'
    Then Màn hình hiển thị để 'Đổi avatar' chọn ảnh 5mb
    When Tôi nhấn nút 'Cập nhật'
    Then Avatar 'Cập nhật' thành công

  Scenario: Kiểm tra việc chọn ảnh mới 10mb avatar mới từ máy tính
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Đổi avatar'
    Then Màn hình hiển thị để 'Đổi avatar' chọn ảnh 10mb
    When Tôi nhấn nút 'Cập nhật'
    Then Avatar 'Cập nhật' thành công

  Scenario: Kiểm tra việc cập nhật avatar khi không chọn ảnh
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Đổi avatar'
    Then Màn hình hiển thị để 'Đổi avatar' không chọn ảnh nào
    When Tôi nhấn nút 'Cập nhật'
    Then Avatar 'Cập nhật' thành công

  Scenario: Kiểm tra việc cập nhật avatar khi chọn ảnh có định dạng word
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Đổi avatar'
    Then Màn hình hiển thị để 'Đổi avatar' chọn định dạng word
    When Tôi nhấn nút 'Cập nhật'
    Then Avatar 'Cập nhật' thành công

  Scenario: Kiểm tra việc hủy cập nhật avatar
    Given Tôi truy cập vào website và login thành công với username = "0855662472" và password = "Long1604@@"
    Then Màn hình hiển thị đầy đủ thông tin Profile người dùng
    When Người dùng chọn tùy chọn 'Đổi avatar'
    Then Màn hình hiển thị để 'Đổi avatar'
    When Tôi nhấn nút 'Hủy'
    Then Avatar 'Cập nhật' thành công
