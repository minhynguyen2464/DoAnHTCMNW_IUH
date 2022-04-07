$(document).ready(function() {
    var i = 1; 

    function kiemTraHo() {
        var i=1;
        let ho = $("#txtLastname").val();
        let mauKT = /([A-Z]{1}[a-z]+)$/
        if(ho==""){
            $("#tbLastname").html("Không được để trống");
            return false;
        }
        if (!mauKT.test(ho)) {
            $("#tbLastname").html("Ký tự đầu viết hoa không dùng số");
            return false;
        }
        $("#tbLastname").html("*");
        return true;
      }
      $("#txtLastname").blur(kiemTraHo);

    function kiemTraTen() {
        var i=1;
        let ten = $("#txtFirstname").val();
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if(ten==""){
            $("#tbFirstname").html("Không được để trống");
            return false;
        }
        if (!mauKT.test(ten)) {
            $("#tbFirstname").html("Mỗi ký tự đầu viết hoa không sử dụng số");
            return false;
        }
        $("#tbFirstname").html("*");
        return true;
      }
      $("#txtFirstname").blur(kiemTraTen);
    
      function kiemTraTenTaiKhoan() {
        var i=1;
        let username = $("#txtUsername").val();
        let mauKT = /^[a-z0-9_-]{3,16}$/;
        if(username==""){
            $("#tbUsername").html("Không được để trống");
            return false;
        }
        if (!mauKT.test(username)) {
            $("#tbUsername").html("Ít nhất 3 ký từ và tối đa 16 ký tự");
            return false;
        }
        $("#tbUsername").html("*");
        return true;
      }
      $("#txtUsername").blur(kiemTraTenTaiKhoan);

      function kiemTraMatKhau() {
        var i=1;
        let matkhau = $("#txtPassword").val();
        let mauKT = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(matkhau==""){
            $("#tbPassword").html("Không được để trống");
            return false;
        }
        if (!mauKT.test(matkhau)) {
            $("#tbPassword").html("Ít nhất 8 ký tự có chữ lẫn số");
            return false;
        }
        $("#tbPassword").html("*");
        return true;
      }
      $("#txtPassword").blur(kiemTraMatKhau);

      function kiemTraEmail() {
        var i=1;
        let email = $("#txtEmail").val();
        let mauKT = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        if(email==""){
            $("#tbEmail").html("Không được để trống");
            return false;
        }
        if (!mauKT.test(email)) {
            $("#tbEmail").html("Phải nhập đúng định dạng email");
            return false;
        }
        $("#tbEmail").html("*");
        return true;
      }
      $("#txtEmail").blur(kiemTraEmail);


    function kiemTraSDT() {
        var mauKT = /^0\d{3}\d{3}\d{3}$/;
        var SDT = $("#SDT").val();
        if (SDT=="") {
            $("#tbSDT").html("Không được để trống");
            return false;
        }
        if (!mauKT.test(SDT)) {
            $("#tbSDT").html("Không cần nhập dấu - và nhập đúng định dạng mẫu");
            return false;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(kiemTraSDT);

    /*$("#Save").click(function () { 
        markup = "<tr><td>" + $("SDT").val() + "</td></tr>";
        tableBody = $("table tbody");
        tableBody.append(markup);
        lineNo++;
        
    });*/

    $("#Save").click(function () { 
        if(kiemTraEmail()==true && kiemTraHo()==true && kiemTraMatKhau()==true && kiemTraSDT()==true && kiemTraTen()==true && kiemTraTenTaiKhoan()==true){
            alert("Nhập thông tin thành công");
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#txtLastname").val() + "</th>";
            row += "<th>" + $("#txtFirstname").val() + "</th>";
            row += "<th>" + $("#txtUsername").val() + "</th>";
            row += "<th>" + $("#txtPassword").val() + "</th>";
            row += "<th>" + $("#txtEmail").val() + "</th>";
            row += "<th>" + $("#SDT").val() + "</th>";
            row += "</tr>"
            $("#danhsach").append(row);
        }
        else{
            alert("Chưa nhập đủ thông tin");
        }
    });

    $("#Login").click(function () { 
        if (kiemTraTenTaiKhoan()==true && kiemTraMatKhau()==true) {
            alert("Đăng nhập thành công");
        } else {
            alert("Đăng nhập thất bại");
        }
        
    });

})