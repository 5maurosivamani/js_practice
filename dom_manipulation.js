/**
 * DOM Manipulation
 */
{
  // class selector
  const buttons = document.getElementsByClassName("btn");

  /**
   * Cannot apply the array methods to HTML Collections
   */
  const buttonsArray = [...buttons];

  buttonsArray.forEach((button) => {
    console.log(button);
  });

  // tag selector
  const divTags = document.getElementsByTagName("div");

  const divTagsArray = [...divTags];

  divTagsArray.forEach((div) => {
    console.log(div);
  });

  // query selector
  // returns only the first element with a class of btn and ignores the rest.
  const growBtnId = document.querySelector("#grow");
  const growBtnClass = document.querySelector(".btn");
  const growBtnTag = document.querySelector("button");
  const secondBtn = document.querySelector("div button:nth-child(2)");

  console.log(growBtnId, growBtnClass, growBtnTag, secondBtn);

  // query selector all
  const allButtons = document.querySelectorAll("button");
  const allButtonsArr = [...allButtons];

  allButtonsArr.forEach((button) => {
    console.log(button);
  });

  /** Change the content of the dom element */
  // innerHTML
  // Using the innerHTML poses potential security risks. An example is cross-site scripting (XSS) attacks.
  allButtonsArr.forEach((button) => {
    console.log(button.innerHTML);
  });

  allButtonsArr[0].innerHTML = "This button modified by innerHTML";

  // textContent and innerText
  const [h4] = document.getElementsByTagName("h4");

  console.log(h4.innerText, h4.textContent);

  const spanInnerText = document.querySelector(".inner-text");
  const spanTextContent = document.querySelector(".text-content");

  let address = `
  ABC Street,
  Spintex Road,
  Accra,
  Ghana.
`;

  spanInnerText.innerText = address;
  spanTextContent.textContent = address;

  /** Work with Attributes */
  const removeBtn = document.querySelector("#remove");

  // get attributes
  console.log(removeBtn.getAttribute("id"));
  console.log(removeBtn.getAttribute("class"));

  // set attributes
  removeBtn.setAttribute("title", "remove");
  removeBtn.setAttribute("data", "{name:'remove'}");

  console.log(removeBtn.getAttribute("data"));

  // remove attributes
  removeBtn.removeAttribute("data");
  console.log("data:", removeBtn.getAttribute("data"));

  // has attribute
  console.log("hasAttribute -> title:", removeBtn.hasAttribute("title"));
  console.log("hasAttribute -> data:", removeBtn.hasAttribute("data"));

  /** Change the Styles */
  const h1Text = document.querySelector("h2");

  h1Text.style.color = "white";
  h1Text.style.backgroundColor = "green";
  h1Text.style.padding = "10px 40px";
  h1Text.style.borderRadius = "10px";
  h1Text.style.border = "3px solid white";

  // remove style
  h1Text.style.backgroundColor = "";

  // Setting Styles with Classes
  const firstParagraph = document.querySelector("p");
  console.log(firstParagraph);

  console.log("firstParagraph class:", firstParagraph.className);

  firstParagraph.className = "text-green-500";

  console.log("firstParagraph class:", firstParagraph.className);

  // classList Property
  // Adding Classes
  firstParagraph.classList.add("font-bold");

  // replacing classes
  firstParagraph.classList.replace("font-bold", "font-semibold");

  // Removing Classes
  firstParagraph.classList.remove("font-semibold");

  // Check the Presence of a Class
  console.log(
    "font-bold is present:",
    firstParagraph.classList.contains("font-bold")
  );
  console.log(
    "text-green-500 is present:",
    firstParagraph.classList.contains("text-green-500")
  );

  // Toggling a Class
  firstParagraph.classList.toggle("text-center");
  console.log(firstParagraph.classList);
  firstParagraph.classList.toggle("text-center");
  console.log(firstParagraph.classList);
  firstParagraph.classList.toggle("text-center");
  console.log(firstParagraph.classList);

  // Traverse the DOM
  // Selecting a Parent with parentNode vs parentElement
  {
    const paragraph = document.querySelector("p");
    const parentNode = paragraph.parentNode;
    console.log("parentNode:", parentNode);
    const parentElement = paragraph.parentElement;
    console.log("parentElement", parentElement);
  }

  // Selecting Elements with childNodes vs children
  {
    const body = document.querySelector("body");
    const childNodes = body.childNodes;
    console.log("childNodes:", childNodes);
    const children = body.children;
    console.log("children:", children);
  }

  // Selecting the First or Last Child/Element
  {
    const container = document.querySelector("#node");
    // firstChild: Selects only the first child node of the parent element.
    const firstChild = container.firstChild;
    console.log("firstChild", firstChild);

    // lastChild: Selects only the last child node of the parent element.
    const lastChild = container.lastChild;
    console.log("lastChild", lastChild);

    // firstElementChild: Selects only the first child element of the parent.
    const firstElementChild = container.firstElementChild;
    console.log("firstElementChild", firstElementChild);

    // lastElementChild: Selects only the last child element of the parent.
    const lastElementChild = container.lastElementChild;
    console.log("lastElementChild", lastElementChild);
  }
}

// Selecting a Sibling of Nodes
{
  const btnGroup = document.querySelector(".btn-group");
  // nextSibling: Selects the next node within the same parent element.
  const nextSibling = btnGroup.nextSibling;
  console.log("nextSibling", nextSibling);

  // previousSibling: Selects the previous node within the same parent element.
  const previousSibling = btnGroup.previousSibling;
  console.log("previousSibling", previousSibling);

  // nextElementSibling: Selects the next element, and ignores any non-element nodes.
  const nextElementSibling = btnGroup.nextElementSibling;
  console.log("nextElementSibling", nextElementSibling);

  // previousElementSibling: Selects the previous element, and ignores any non-element nodes.
  const previousElementSibling = btnGroup.previousElementSibling;
  console.log("previousElementSibling", previousElementSibling);
}

// DOM Events and Event Listeners
{
  // Difference Between Event Listener and Event Handler
  // An event handler is a response to the event.
  // An event listener is a method to "listen" or keep an eye out for DOM events.
  // Example of using an inline event handler
  // <button onclick="alert('Hello')">Click me!</button>;

  // An example of using an on-event handler
  const myButton = document.querySelector("button");

  myButton.onclick = function () {
    console.log("Run first handler");
  };

  myButton.onclick = function () {
    console.log("Run second handler");
  };

  myButton.click();

  //   An example of using the addEventListener method
  myButton.addEventListener("click", function () {
    console.log("Run first handler");
  });

  myButton.addEventListener("click", function () {
    console.log("Run second handler");
  });

  myButton.click();

  // Challenge
  const showBtn = document.querySelector(".btn-group button:last-child");
  const h2 = document.querySelector("h2");
  showBtn.addEventListener("click", function () {
    h2.classList.toggle("bg-green-600");
  });
}

// Event Object
{
  const showBtn = document.querySelector(".btn-group button:last-child");

  showBtn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    console.log("type: ", e.type);
    console.log("target: ", e.target);
    console.log("clientX: ", e.clientX);
    console.log("clientY: ", e.clientY);
  });

  /**
    Mouse events:

    click: when the element is clicked.
    dbclick: when the element is double clicked.
    mouseover: when the mouse pointer enters the element.
    mouseleave: when the mouse pointer leaves the element.
    mousedown: when the mouse is pressed down over an element.
    mouseup: when the mouse is released over an element.
    Keyboard events:

    keydown: when a key on the keyboard is pressed down.
    keyup: when a key on the keyboard is released.
    keypress: when a key is pressed and shows the actual key that was pressed. Note that this event is not fired for all keys, especially non-printable keys.
    Form events:

    submit: when a form is submitted.
    input: when the value of an input field changes.
    change: when the value of a form element changes and loses focus.
    Window events:

    load: when the browser finishes loading the page.
    unload: when the user leaves the page.
    resize: when the browser window is resized.
    scroll: when the user scrolls through the document.
*/
}

/**  Event Flow in JavaScript */

// Event Bubbling
{
  const button = document.querySelector(".btn-event");
  const innerDiv = document.querySelector(".inner");
  const outerDiv = document.querySelector(".outer");

  button.addEventListener("click", function () {
    console.log("Click on button");
  });

  innerDiv.addEventListener("click", function () {
    console.log("Click on inner Div");
  });

  outerDiv.addEventListener("click", function () {
    console.log("Click on outer Div");
  });
}

// Event Capturing
{
  const button = document.querySelector(".btn-event");
  const innerDiv = document.querySelector(".inner");
  const outerDiv = document.querySelector(".outer");

  button.addEventListener(
    "click",
    function (e) {
      console.log("Click on button");
    },
    true
  );

  innerDiv.addEventListener(
    "click",
    function () {
      console.log("Click on inner Div");
    },
    true
  );

  outerDiv.addEventListener(
    "click",
    function () {
      console.log("Click on outer Div");
    },
    true
  );
}

// The Event stopPropagation() Method -  Event Bubbling
{
  const button = document.querySelector(".btn-event");
  const innerDiv = document.querySelector(".inner");
  const outerDiv = document.querySelector(".outer");

  button.addEventListener("click", function (e) {
    e.stopPropagation(); // stops the event from bubbling up to the parent elements.
    console.log("Click on button");
  });

  innerDiv.addEventListener("click", function () {
    console.log("Click on inner Div");
  });

  outerDiv.addEventListener("click", function () {
    console.log("Click on outer Div");
  });
}

// The Event stopPropagation() Method -  Event Capturing
{
  const button = document.querySelector(".btn-event");
  const innerDiv = document.querySelector(".inner");
  const outerDiv = document.querySelector(".outer");

  button.addEventListener(
    "click",
    function () {
      console.log("Click on button");
    },
    true
  );

  innerDiv.addEventListener(
    "click",
    function () {
      console.log("Click on inner Div");
    },
    true
  );

  outerDiv.addEventListener(
    "click",
    function (e) {
        e.stopPropagation();
      console.log("Click on outer Div", e);
    },
    true
  );
}
