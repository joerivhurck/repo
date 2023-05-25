export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}

export function testCounter(cijfer) {
  let counter = 0;
  const testCounter = (count) => {
    counter = count;
    cijfer.innerHTML = `cijfer is ${counter}`;
  };
  cijfer.addEventListener("click", () => testCounter(counter + 2));
  testCounter(4);
}

