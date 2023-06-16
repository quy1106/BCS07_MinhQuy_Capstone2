
function getInfoUser() {
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;
  var rePassword = document.querySelector("#rePassword").value;
  var name = document.querySelector("#name").value;
  var gender = isGender();
  var phone = document.querySelector("#phone").value;

  var isValid = true;

  /**---------------------------Check Validation---------------------------*/
  // Email
  isValid &= checkEmpty( email, "#tbEmail", "(*) Vui lòng nhập email")
   && checkEmail(email, "#tbEmail", "(*) Vui lòng nhập đúng email");

  // Password
  isValid &=
   checkEmpty(
      password,
      "#tbPassword",
      "(*) Vui lòng nhập mật khẩu"
    ) &&
   checkLength(
      password,
      "#tbPassword",
      "(*) Mật khãu phải chứa 8-12 kí tự",
      7,
      13
    ) &&
   checkPassword(
      password,
      "#tbPassword",
      "(*)  Mật khẩu phải có ít nhất một chữ cái in hoa,<br> một chữ cái viết thường , một số và một kí tự đặc biệt"
    );
  isValid &=
   checkEmpty(
      rePassword,
      "#tbRePassword",
      "(*) Vui lòng xác nhận lại mật khẩu"
    ) &&
   confirmPassword(
      rePassword,
      password,
      "#tbRePassword",
      "(*) Vui lòng nhập lại giống mật khẩu"
    );

  // Name
  isValid &=
   checkEmpty(name, "#tbName", "(*) Vui lòng nhập tên") &&
   checkName(
      name,
      "#tbName",
      "(*) Vui lòng nhập tên không chứa số và kí tự đặc biệt"
    );

  // Phone
  isValid &=
   checkEmpty(
      phone,
      "#tbPhone",
      "(*) Vui lòng nhập số điện thoại"
    ) &&
   checkPhone(
      phone,
      "#tbPhone",
      "(*) Vui lòng đúng số điện thoại"
    ) &&
   checkLength(
      phone,
      "#tbPhone",
      "(*) Số điện thoại có 10 hoặc 11 số",
      10,
      11
    );

  // Gender
  isValid &=checkRadioEmpty(
    gender,
    "#tbGeder",
    "(*) Vui lòng chọn giới tính"
  );

  if (isValid) {
    var user = new User(email, password, name, gender, phone);

    return user;
  }
  return null;
}

function btnSubmit() {
  user = getInfoUser();

  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    ResponseType: "JSON",
    data: user,
  });

  promise.then(function (result) {
    console.log(result.data.content);
    alert("Đăng ký thành công");
  });

  promise.catch(function (error) {
    console.log(error);
   emailExisted(
      error.message,
      "#tbEmail",
      "(*) Email đã tồn tại. Đăng ký thất bại"
    );
  });
}

function isGender() {
  var isMale = document.querySelector("#male").checked;
  var isFemale = document.querySelector("#female").checked;

  if (isMale) {
    return true;
  }
  if (isFemale) {
    return false;
  }
  return null;
}
//Lấy data
function getLocalStorage() {
  if (localStorage.getItem("NumBuy")) {
    var dataString = localStorage.getItem("NumBuy");
    var numBuy = JSON.parse(dataString);
    document.querySelector("#numBuy").innerHTML = "(" + numBuy + ")";
  }
}
window.onload = function () {
  getLocalStorage();
};
