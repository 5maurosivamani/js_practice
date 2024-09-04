"use strict";

/**
 * synchronous
 * */
// const name = "john";

// console.log("Synchronous Code");

// function greet(name) {
//   alert(`Hello, ${name}!`);
// }

// greet(name);

// console.log("The End...");

/**
 *  asynchronous
 * */
// const name = 'raj';

// console.log("Asynchronous Code")

// setTimeout(() => {
//     alert(`Hello, ${name}!`);
// }, 2000);

// console.log("The End...");

/**
 * JavaScript runtime for Browser have WEB API
 *
 * # That have DOM, Timer, Fetch and other functions are
 *   run asynchronously
 * # Web API functions doesn't executed in javascript thread.
 *   it's run on web api.
 */

/**
 * Ajax and XML HTTP Request Object
 *
 * # AJAX Stands for Asynchronous JavaScript and XML.
 * # AJAX is not a programming language. but it's a
 *   existing set of web Technologies.
 * # AJAX help's to fetch data asynchronously from remote server.
 * # When data is loaded by AJAX, it's loaded asynchronously
 * without page reload / refresh
 * # Modern website use JSON for data transfer instead of XML. AJAX also supports Json.
 */

// XML HTTP Request Object
let div = document.getElementById("products");

document.getElementById("load-btn").addEventListener("click", getProducts);

function getProducts() {
  // 1. Create a XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // 2. Create a Request
  // parameter's are method, url, sync/async, userId, password
  xhr.open("GET", "db.json", true);

  //  3.Send Request
  xhr.send();

  //  4.handle progress
  xhr.onprogress = function () {
    // console.log("Loading...");
    div.innerText = "Loading...";
  };

  //  5. Handle Response
  xhr.onload = function () {
    if (this.status === 200) {
      // convert Json to Js Object
      const response = JSON.parse(this.responseText);
      const { products } = response;

      //   console.log(products);

      //  6. Show Products
      products.forEach((product) => {
        let html = `
        <div class='product p-3 bg-blue-200 text-gray-700 rounded mb-2 shadow-xl'>
            <h3 class="text-xl font-semibold">${product.name}</h3>
            <p>${product.description}</p>
            <p>$ ${product.price}</p>
        </div>`;

        div.insertAdjacentElement("beforeend", stringToHTML(html));
      });
    } else {
      div.innerText = `Error: ${this.status}`;
    }
  };
}

// convert string to html
function stringToHTML(str) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, "text/html");
  return doc.body;
}

// convert string from object
Object.prototype.getValueString = function (type) {
  const res = Object.entries(this);

  if (type === "key") {
    return res[0][0];
  } else {
    return res[0][1];
  }
};

/**
 * XMLHttpRequest to WEB API
 */
const countryDataContainer = document.getElementById("countries");

let res;

function createCountry(countryData) {
  const html = `
    <div class="rounded-t shadow width-fit">
          <img src='${countryData?.flags?.png}' class="rounded-t-md h-auto min-w-full" alt=${
    countryData?.name
  } />
      <div class="p-2 py-3 pb-4">
        <h2 class="text-xl font-semibold">${countryData?.name?.common}</h2>
        <h4 class="text-gray-400 font-medium">${countryData?.region?.toUpperCase()}</h4>
        <p class="text-gray-500"><span class="mr-2">👤</span> ${
          countryData?.population
        } people</p>
        <p class="text-gray-500"><span class="mr-2">🎙️</span>${countryData?.languages?.getValueString()}</p>
        <p class="text-gray-500"><span class="mr-2">💲</span>${countryData?.currencies?.getValueString(
          "key"
        )}</p>
      </div>
    </div>
    `;

  // convert string to html
  countryDataContainer.insertAdjacentElement("beforeend", stringToHTML(html));
}

function getCountry(countryName) {
  // create XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // create a request
  xhr.open("GET", `https://restcountries.com/v3.1/name/${countryName}`, true);

  // send request
  xhr.send();

  xhr.addEventListener("load", function () {
    // convert JSON string to JS Object
    const [countryData] = JSON.parse(xhr.responseText);

    createCountry(countryData);
  });
}

getCountry("usa");
getCountry("india");
getCountry("italy");

