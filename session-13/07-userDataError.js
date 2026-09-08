// Q10/Q11 - Handle property access on an undefined object
let user;

try {
  console.log(user.name);
} catch (error) {
  console.log("User data not found");
}
