function checkEmpty (value, elementError, mess) {
    if (value === "") {
      //show thong bao loi
      document.querySelector(elementError).innerHTML = mess;
      document.querySelector(elementError).style.display = "block";
      return false;
    }else{
  
    document.querySelector(elementError).innerHTML = "";
    document.querySelector(elementError).style.display = "none";
    return true;
    }
  }
  checkRadioEmpty = function (checked, elementError, mess) {
    if (checked === null) {
      document.querySelector(elementError).innerHTML = mess;
      document.querySelector(elementError).style.display = "block";
      return false;
    }
    document.querySelector(elementError).innerHTML = "";
    document.querySelector(elementError).style.display = "none";
    return true;
  }
  
  confirmPassword = function (valueRePass, valuePass, elementError, mess) {
    if (valueRePass !== valuePass) {
      document.querySelector(elementError).innerHTML = mess;
      document.querySelector(elementError).style.display = "block";
      return false;
    }
    document.querySelector(elementError).innerHTML = "";
    document.querySelector(elementError).style.display = "none";
    return true;
  }
  
  checkLength = function (value, elementError, mess, min, max) {
    if (value.length >= min && value.length <= max) {
      document.querySelector(elementError).innerHTML = "";
      document.querySelector(elementError).style.display = "none";
      return true;
    }
    document.querySelector(elementError).innerHTML = mess;
    document.querySelector(elementError).style.display = "block";
    return false;
  }
  
  checkEmail = function (value, elementError, mess) {
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(email)) {
      document.querySelector(elementError).innerHTML = "";
      document.querySelector(elementError).style.display = "none";
      return true;
    }
    document.querySelector(elementError).innerHTML = mess;
    document.querySelector(elementError).style.display = "block";
    return false;
  }
  
  checkPassword = function (value, elementError, mess) {
    var password =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (value.match(password)) {
      document.querySelector(elementError).innerHTML = "";
      document.querySelector(elementError).style.display = "none";
      return true;
    }
    document.querySelector(elementError).innerHTML = mess;
    document.querySelector(elementError).style.display = "block";
    return false;
  }
  checkName = function (value, elementError, mess) {
    var letter = /^[^0-9]+$/;
    if (letter.test(value)) {
      document.querySelector(elementError).innerHTML = "";
      document.querySelector(elementError).style.display = "none";
      return true;
    }
    document.querySelector(elementError).innerHTML = mess;
    document.querySelector(elementError).style.display = "block";
    return false;
  }
  
  
  
  checkPhone = function (value, elementError, mess) {
    var number = /^[0-9]+$/;
    if (value.match(number)) {
      document.querySelector(elementError).innerHTML = "";
      document.querySelector(elementError).style.display = "none";
      return true;
    }
    document.querySelector(elementError).innerHTML = mess;
    document.querySelector(elementError).style.display = "block";
    return false;
  }
  emailExisted = function (error, elementError, mess) {
    if (error === "Request failed with status code 400") {
      document.querySelector(elementError).innerHTML = mess;
      document.querySelector(elementError).style.display = "block";
    }
    return true;
  }