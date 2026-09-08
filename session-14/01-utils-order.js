// Q1/Q2 - Named export and import
// utils.js
export const generateOrderId = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from({ length: 8 }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join("");
};

// order.js usage:
// import { generateOrderId } from "./utils.js";
// console.log("New Order ID:", generateOrderId());
