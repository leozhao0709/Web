const a = {
  name: '111',
  age: 22,
};

const b = {
  car: 'bbb',
  color: 'red'
};

const c = {
  ...a,
  ...b
};

console.log(c);