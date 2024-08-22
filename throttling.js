let count = 1;

// Throttling function
function throttling(method, limit) {
  let flag = true;
  return function () {
    const context = this;
    const args = arguments;

    if (flag) {
      method.apply(context, args);
      flag = false;

      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}

// debounce function
function debounce(method, delay) {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => method.apply(context, args), delay);
  };
}

// handle scrolling
function handleScroll(e) {
  console.log(e);
  console.log("scroll happened -> ", count++);
  console.log(this.scrollY)
}

// Applying throttling to handleScroll function
// const throttlingHandleScroll = throttling(handleScroll, 1000);

// Applying debounce to handleScroll function
const debounceHandleScroll = debounce(handleScroll, 100);

// window.addEventListener("scroll", throttlingHandleScroll);
window.addEventListener("scroll", debounceHandleScroll);
