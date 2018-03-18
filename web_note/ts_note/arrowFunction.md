# Arrow function

## 1. legacy arrow function tricky

```ts
const user = {
    name: 'Lei',
    sayHi: () => {
        console.log(`Hi, I'm ${this.name}`); // Hi, I'm undefined
    },

    sayHiFunction: function () {
        console.log(`Hi, I'm ${this.name}`); // Hi, I'm Lei
    },

    sayHiAlt() {
        console.log(`Hi, I'm ${this.name}`); // Hi, I'm Lei
    }
};
```

## 2. es6 class arrow function

```ts
class UserClass {
    name: string;

    constructor() {
        this.name = 'Lei';
    }

    sayHi() {
        console.log(`Hi, I'm ${this.name} with es6 class`); // Hi, I'm Lei with es6 class
    }

    sayHiAlt = () => {
        console.log(`Hi, I'm ${this.name} with es6 class`); // Hi, I'm Lei with es6 class
    }
}
```