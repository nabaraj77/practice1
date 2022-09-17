let name = "Hello";
console.log(name);
name = 10;

function name() {
  console.log("Hello");
}
name();

const name = (a, b = "Test") => {
  return a, b;
};

name("Hello", "aa");

let student = {
  name: "a",
  age: 12,
  marks: [1, [0, 1], 2, 3],
};
console.log(student.marks[1][0]);

let array = [1, 2, 4, 5, 10, 20];
let out = array.map((ele) => {
  return ele * 2;
});

console.log(out);

let out = array.filter((ele) => {
  if (ele % 2 === 0) {
    return ele;
  }
});
console.log(out);

let student = [
  {
    name: "a",
    age: 1,
    address: "Ktm",
  },

  {
    name: "b",
    age: 12,
    address: "Ktm",
  },
];
let out = student.find((ele) => {
  return ele.name === "a";
});
console.log(out);
