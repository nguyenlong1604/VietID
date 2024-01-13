Feature: Đăng nhập My_bizfly

  Scenario: Đăng nhập thành công với tài khoản tồn tại trên VietID
    Given Tôi đã mở trang đăng nhập My_bizfly
    When Tôi nhập tài khoản "0855662472"
    # Then Thông tin vừa nhập được hiển thị vào textbox usernamee
    # When Tôi nhấn nút 'Tiếp tục'
    # Then Màn hình hiển thị đầy đủ thông tin để Nhập mật khẩuu
    # When Tôi nhập mật khẩuu "Long1604@@"
    # Then Thông tin vừa nhập được hiển thị vào textbox mật khẩuu
    # When Tôi nhấn nút 'Đăng nhập bằng ViệtID'
    # Then Tôi nhìn thấy trang My_bizfly