Feature: Đăng nhập My_bizfly

  Scenario: Đăng nhập thành công với tài khoản và mật khẩu hợp lệ từ VietID
    Given Tôi đã mở trang đăng nhập My_bizfly
    When Tôi nhập tài khoản "0855662472"
    When Tôi nhấn nút 'Tiếp tụcc'
    Then Tôi chuyển sang màn hình hiển thị nhập mật khẩuu
    Then Màn hình hiển thị đầy đủ thông tin để Nhập mật khẩuu
    When Tôi nhập mật khẩuu "Long1604@@"
    Then Thông tin vừa nhập được hiển thị vào textbox mật khẩuu
    When Tôi nhấn nút 'Đăng nhập bằng ViệtID'
    Then Tôi nhìn thấy trang chủ My_bizfly

  # Scenario: Đăng nhập không thành công với tài khoản không tồn tại
  #   Given Tôi đã mở trang đăng nhập My_bizfly
  #   When Tôi nhập tài khoản "3113232"
  #   Then Thông tin vừa nhập được hiển thị vào textbox username
  #   When Tôi nhấn nút 'Tiếp tục'
  #   Then Tôi nhìn thấy thông báo với lỗi tài khoản không tồn tại "Vui lòng nhập đúng định dạng của SĐT hoặc Email"

  
