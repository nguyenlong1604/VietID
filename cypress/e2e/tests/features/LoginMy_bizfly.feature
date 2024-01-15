Feature: Đăng nhập My_bizfly

  Scenario: Đăng nhập thành công với tài khoản và mật khẩu hợp lệ từ VietID
    Given Tôi đã mở trang đăng nhập My_bizfly
    When Tôi nhập tài khoản "0855662472"
  #   Then Thông tin vừa nhập được hiển thị vào textbox username
  #   When Tôi nhấn nút 'Tiếp tục'
  #   Then Tôi chuyển sang màn hình hiển thị nhập mật khẩu
  #   Then Màn hình hiển thị đầy đủ thông tin để Nhập mật khẩu
  #   When Tôi nhập mật khẩu "Long1604@@"
  #   Then Thông tin vừa nhập được hiển thị vào textbox mật khẩu
  #   When Tôi nhấn nút 'Đăng nhập'
  #   Then Tôi nhìn thấy trang chủ My_bizfly

  # Scenario: Đăng nhập không thành công với tài khoản không tồn tại
  #   Given Tôi đã mở trang đăng nhập My_bizfly
  #   When Tôi nhập tài khoản "3113232"
  #   Then Thông tin vừa nhập được hiển thị vào textbox username
  #   When Tôi nhấn nút 'Tiếp tục'
  #   Then Tôi nhìn thấy thông báo với lỗi tài khoản không tồn tại "Vui lòng nhập đúng định dạng của SĐT hoặc Email"

  
