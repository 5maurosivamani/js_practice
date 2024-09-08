/**
 *  session storage
 */
sessionStorage.setItem("name", "raj");
sessionStorage.setItem("userId", "11220");
sessionStorage.setItem("age", "30");

// get session storage data
console.log(sessionStorage.getItem("name"));
console.log(sessionStorage.getItem("userId"));
console.log(sessionStorage.getItem("age"));

// remove session storage data
sessionStorage.removeItem("name");
console.log(sessionStorage.getItem("name"));

/**
 * Local storage
 */

// set data
localStorage.setItem("name", "raj");
localStorage.setItem("userId", "11220");
localStorage.setItem("age", "30");

// get data

console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("userId"));
console.log(localStorage.getItem("age"));

// remove data
localStorage.removeItem("name");
console.log(localStorage.getItem("name"));

/**
 * Cookie
 */

// set cookie
document.cookie = `name=raj; expires = ${new Date(2024, 10, 9).toUTCString()}`;
document.cookie = `userId=11220; expires = ${new Date(
  2024,
  10,
  9
).toUTCString()}`;
document.cookie = `age=30; expires = ${new Date(2024, 10, 9).toUTCString()}`;

// get cookie
console.log(document.cookie);

// remove cookie

document.cookie = `name=; expires = ${new Date(0).toUTCString()}`;
document.cookie = `userId=; expires = ${new Date(0).toUTCString()}`;

console.log(document.cookie);