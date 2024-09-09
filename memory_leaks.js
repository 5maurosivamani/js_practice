// const arr = [];

// for (let i = 0; i < 1024 * 1024 * 128; i++) {
//   arr.push(i);
// }

// console.log(process.memoryUsage());

// let value = null;

// function closure() {
//   let last = value;

//   (function () {
//     last;
//   })();

//   value = {
//     a: function () {},
//   };
// }

// setInterval(function () {
//     closure();
//     console.log(process.memoryUsage());
// }, 1)

// console.log("Memory Leaks");

// var arr = [];

// function createNode() {
//   var div,
//     i = 100,
//     frag = document.createDocumentFragment();

//   for (; i > 0; i++) {
//     div = document.createElement("div");
//     div.appendChild(
//       document.createTextNode(`${i} ${new Date().toTimeString()}`)
//     );
//     frag.appendChild(div);
//   }

//   document.getElementById("node").appendChild(frag);
// }

// function grow(){
//   arr.push(new Array(1000000).join('x'));
//   createNode();
//   setInterval(grow, 1000);
// }
var x = [];

function grow() {
  for (var i = 0; i < 10000; i++) {
    document.body.appendChild(document.createElement("div"));
  }
  x.push(new Array(1000000).join("x"));
}

document.getElementById("grow").addEventListener("click", grow);
document.getElementById("remove").addEventListener("click", () => {
  window.x = null;
  document.body.innerHTML = "yep";
});
