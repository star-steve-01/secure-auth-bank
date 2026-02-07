function validateString(stringLiteral:string) {
  if (typeof stringLiteral != "string" 
    || stringLiteral.trim() == ""
  ) {
    throw new Error("ERR_INVALID_FORMAT_STRING");
  }
}

const validateUsername = (username: string) => {
  validateString(username);

  /**
   * Username & Display Name regex rules
   * - must start with alphabet
   * - at least 8 characters
   * - alphabets, numbers and underscore are allowed
   * - max length: 32
   */
  const usernamePattern = /^[a-zA-Z]{1}[a-zA-Z0-9_]{7,31}$/;

  if (!(usernamePattern.test(username))) {
    throw new Error("ERR_INVALID_FORMAT_USERNAME");
  }
};

const validateEmail = (email: string) => {
  validateString(email);

  /**
   * Local part (before @)
   * 
   * - must start with a letter
   * - allows letters, numbers, . _ % + -
   * - max length: 32
   * 
   * Domain part
   * 
   * - valid domain characters
   * - requires at least one dot
   * - TLD must be more than 2 letters
   */
  const emailPattern = /^[a-zA-Z][a-zA-Z0-9._%+-]{0,31}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!(emailPattern.test(email))) {
    throw new Error("ERR_INVALID_FORMAT_EMAIL");
  }
};

const validatePassword = (password: string) => {
  validateString(password);

  /**
   * Password regex rules
   * - must contain at least 1 lower, 1 upper, 1 number and 1 special character
   * - special characters allowed: @#^%$*_
   * - at least 12 characters
   * - max length: 32
   */
  const passwordPattern = /^(?=.*[@#^%$*_])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9@#^%$*_]{12,32}$/;

  if (!(passwordPattern.test(password))) {
    throw new Error("ERR_INVALID_FORMAT_PASSWORD");
  }
};

export {
  validateUsername,
  validateEmail,
  validatePassword
};