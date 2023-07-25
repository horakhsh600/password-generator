const btn = document.getElementById("btn");
const copyBtn1 = document.getElementById("copy-btn-1");
const copyBtn2 = document.getElementById("copy-btn-2");
let inputfelid1 = document.getElementById("inp-1");
let inputfelid2 = document.getElementById("inp-2");

btn.addEventListener("click", function () {
  const passwordLength = 12; // Change this to adjust the password length
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-={}[]|;:,.<>?";

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  inputfelid1.value = password;
});
btn.addEventListener("click", function () {
  const passwordLength = 12; // Change this to adjust the password length
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-={}[]|;:,.<>?";

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  inputfelid2.value = password;
});
copyBtn1.addEventListener("click", function () {
  inputfelid1.select();
  document.execCommand("copy");
});
copyBtn2.addEventListener("click", function () {
  inputfelid2.select();
  document.execCommand("copy");
});
