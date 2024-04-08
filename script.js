const passwordBox = document.getElementById("password");
const length = 13;
const uppercase = "QWERTYUIOPLKJHGFDSAZXCVBNM";
const lowercase = "qwertyuioplkjhgfdsazxcvbnm";
const numbers = "1234567890";
const splCharacters = "!@#$%^&*()_+-=~`";

const password = uppercase + lowercase + numbers + splCharacters;
function generatePassword() {
  let psswd = "";
  psswd += uppercase[Math.floor(Math.random() * uppercase.length)];
  psswd += lowercase[Math.floor(Math.random() * lowercase.length)];
  psswd += numbers[Math.floor(Math.random() * numbers.length)];
  psswd += splCharacters[Math.floor(Math.random() * splCharacters.length)];

  while (length > psswd.length) {
    psswd += password[Math.floor(Math.random() * password.length)];
  }

  passwordBox.value = psswd;
}
