/**
 * DOM Manipulation
 */
const node = document.getElementById("btn-group");
const currentNode = document.getElementById("grow");
const current = document.querySelector(".btn-group");

// console.log("node", node);
// parent
let parentElement = node.parentNode;
console.log("parent", parentElement);

// first child
let firstChild = parentElement.firstChild;
console.log("firstChild", firstChild);

// last child
let lastChild = parentElement.lastChild;
console.log("lastChild", lastChild);

// child nodes
let children = node.childNodes;
console.log("children", children);

// next sibling
let nextSibling = currentNode.nextElementSibling;
console.log("nextSibling", nextSibling);

// previous sibling
console.log("current", current);
let previousSibling = current.previousElementSibling;
console.log("previous sibling", previousSibling);

// create element
let div = document.createElement("div");
div.id = "new-node";
div.textContent = "New Div";
div.classList.add("text-white");
parentElement.appendChild(div);

// insert before
let newNode = document.getElementById("new-node");
console.log("newNode", newNode);

let p = document.createElement("p");
p.textContent = "New Paragraph";
p.classList.add("text-white");

parentElement.insertBefore(p, newNode);

// replace child
let newChild = document.createElement("h1");
newChild.textContent = "This is a new Child";
newChild.classList.add("text-white");

// clone node
let cloneNode = newChild.cloneNode(true);
console.log("cloneNode", cloneNode);

parentElement.appendChild(cloneNode);

// remove child
parentElement.removeChild(cloneNode);

/** Handling Events */
const button = document.getElementById("grow");

button.addEventListener("click", (event) => {
  console.log("Button clicked", event);
});

// Handling events: includes HTML event handler attribute, element’s event handler property, and addEventListener().
// Page Load Events: includes DOMContentLoaded, load, beforeunload, and unload.
// load event: includes dependent resources like JavaScript files, CSS files, and images.
// Unload event: The unload event is fired after before unload event and pagehide event.
// Mouse events: includes mousedown, mouseup, and click.
// Keyboard events: includes keydown, keypress, and keyup.
// Scroll events: includes scrollX and scrollY properties that returns the number of pixels that the document is currently scrolled horizontally and vertically.

/** Manipulating Element’s Styles */

button.style.color = 'red';
