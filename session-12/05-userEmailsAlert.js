// Q9 - Fetch users and show all emails in one alert
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const emails = users.map((user) => user.email).join(", ");
    alert(emails);
  })
  .catch((error) => console.error("Error:", error));
