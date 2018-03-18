  var resultDiv = document.getElementById("result");
  var passwordField = document.getElementById("password");
  var bar = document.querySelector(".bar");
  var but = document.querySelector("button");

  //is number?//
  function is_number(passwordInput) {
      for (let i = 0; i < passwordInput.length; i++) {
          if (!isNaN(passwordInput.charAt(i))) {
              return true
          }
      }
  };

  // is capital letter?//



  function is_big(passwordInput) {
      letters = "ABCDEFGHIJKLMNOPRSTUWZYX";
      for (let i = 0; i < passwordInput.length; i++) {
          for (let j = 0; j < letters.length; j++) {
              if (passwordInput.charAt(i) === letters.charAt(j)) {
                  return true
              }
          }
      }
  };



  //are special signs?//

  function is_special(passwordInput) {
      specialSigns = "!%&@#$^*?_~";
      for (let i = 0; i < passwordInput.length; i++) {
          for (let j = 0; j < specialSigns.length; j++) {
              if (passwordInput.charAt(i) === specialSigns.charAt(j)) {
                  return true
              }
          }
      }
  };
  //more than 8 numbers? //

  function is_long(passwordInput) {
      return passwordInput.length > 8;
  };


  function password(passwordInput) {

      if (is_number(passwordInput) && is_big(passwordInput) && is_long(passwordInput) && is_special(passwordInput)) {

          resultDiv.innerHTML = "Now, your password is perfect!";
          bar.removeAttribute("class");
          bar.classList.add("barVstrong", "bar")
      } else if (is_long(passwordInput) && (is_big(passwordInput) || is_special(passwordInput)) && (is_number(passwordInput))) {

          resultDiv.innerHTML = "Good, your password is pretty strong but it still can be better. Did you add both: capital letters and special signs?";
          bar.removeAttribute("class");
          bar.classList.add("barStrength", "bar")
      } else if (is_long(passwordInput) && (is_big(passwordInput) || is_number(passwordInput) || is_special(passwordInput))) {

          resultDiv.innerHTML = "Better, but it's till not enough.";
          bar.removeAttribute("class");
          bar.classList.add("barMedium", "bar")
      } else if (is_long(passwordInput)) {

          resultDiv.innerHTML = "It's still weak, maybe add some numbers?";

          bar.removeAttribute("class");
          bar.classList.add("barWeak", "bar")

      } else if (passwordInput == "") {
          bar.removeAttribute("class");
          resultDiv.innerHTML = "";
      } else {

          resultDiv.innerHTML = "Your password is very weak, firs of all it's too short. Yes, you should be scared. They can watching you.";
          bar.removeAttribute("class");
          bar.classList.add("barVweak", "bar")

      };
  };

  passwordField.addEventListener("input", function () {
      var passwordInput = document.getElementById("password").value;
      password(passwordInput);
  });

  but.addEventListener("click", function () {
      var passwordField = document.getElementById("password");
      var atr = passwordField.getAttribute("type");
      if (atr == "password") {
          passwordField.setAttribute("type", "text")
      } else if (atr == "text") {
          passwordField.setAttribute("type", "password")
      }
  })
