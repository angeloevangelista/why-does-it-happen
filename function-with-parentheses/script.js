const testdiv1 = document.getElementById(`testdiv1`);
const testdiv2 = document.getElementById(`testdiv2`);

let counter1 = 0;
let counter2 = 0;

function run1() {
  counter1 += 1;
  testdiv1.innerHTML = `Running...${counter1}`;
}

function run2() {
  counter2 += 1;
  testdiv2.innerHTML = `Running...${counter2}`;
}

const testFunc1 = () => {
  setInterval(run1, 1000);
};

const testFunc2 = () => {
  setInterval(run2(), 1000);
};
