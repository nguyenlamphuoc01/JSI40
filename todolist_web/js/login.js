//  ================================================
// login

//  ================================================
// signup
const signupForm = document.getElementById("signup-form");

function validateSignupForm(email, username, password, confirmPassword) {
  // username >= 6 + no space
  if (username.length < 6) {
    alert("ten nguoi dung phai co 6 ky tu tro len");
    return false;
  }
  if (username.includes(" ")) {
    alert("ten nguoi dung ko dc dung cach");
  }
  //   pass >= 6
  if (password < 6) {
    alert("mat khau phai co 6 ky tu tro len");
    return false;
  }
  //  pass == confirmpass
  if (password !== confirmPassword) {
    alert("mat khau phai trung voi confirmpass");
    return false;
  }
  return true;
}

signupForm.addEventListener("submit", () => {
  //-------------------------------
  //  validate form
  const username = signupForm.getElementById("signupUsername");
  const email = signupForm.getElementById("signupEmail");
  const password = signupForm.getElementById("signupPassword");
  const confirmPassword = signupForm.getElementById("signupConfirmPassword");
  if (
    validateSignupForm(
      username.value,
      email.value,
      password.value,
      confirmPassword.value
    )
  ) {
    //-------------------------------
    // kiem tra ko dc trung email + username cu

    //-------------------------------
    //  create account with firebase
  }
});
