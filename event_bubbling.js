// attach the event listener
attachEvent("great-grant-parent", false);
attachEvent("grant-parent", true);
attachEvent("parent", true);
attachEvent("child", false);

// define the event handlers
function attachEvent(id, capturing = false, stopPropagation = false) {
  document.getElementById(id).addEventListener(
    "click",
    function (e) {
      console.log(`${id} is clicked`);

      if (stopPropagation) {
        e.stopPropagation();
      }
    },
    capturing
  );
}

// Notes:-
// 1. First Capturing and next bubbling events
// 2. bubbling child to parent bubbling events
// 3. Capturing parent to child down events
// 4. Stop propagation using to prevent bubbling

// Event Delegation Methods
const category = document.getElementById("category");

category.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});

// const categoryItems = document.querySelectorAll("#category li");

// categoryItems.forEach((item) => {
//   item.addEventListener("click", function (e) {
//     console.log(e.target.textContent);
//   });
// });

// Event Delegation with event delegation methods for input
const inputName = document.getElementById("name");

inputName.addEventListener("keyup", function (e) {
  // check if uppercase data attribute is present or not
  if (e.target.dataset.uppercase !== undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});
