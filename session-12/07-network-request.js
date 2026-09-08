// Q12/Q13/Q14 - Network tab practice
// Run this file in a browser, then open DevTools > Network.
// The request should appear as a GET request to /users.
//
// Request-response cycle:
// 1. fetch() sends a GET request to the JSONPlaceholder users endpoint.
// 2. The server returns a JSON response containing the users; DevTools shows
//    the request URL, method, status, headers, timing, and response body.

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    console.log("Users received:", users);
  })
  .catch((error) => console.error("Error:", error));
