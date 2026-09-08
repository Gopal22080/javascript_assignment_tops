// Q3 - Validate username using throw and try...catch
const validateUsername = (username) => {
  if (!/^[a-zA-Z0-9]+$/.test(username)) {
    throw new Error("Invalid Username");
  }

  return "Valid Username";
};

try {
  console.log(validateUsername("Gopal123"));
  console.log(validateUsername("Gopal@123"));
} catch (error) {
  console.log(error.message);
}
