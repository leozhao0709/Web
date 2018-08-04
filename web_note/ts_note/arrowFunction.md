# Arrow function

## 0. Note

-   Arrow function keeps outside context.

## 1. legacy arrow function tricky

```ts
const user = {
    // outside user this is undefined
    name: 'Lei',
    teamMember: ['Lei', 'Joe', 'Ben'],
    teamName: 'Spitfire',
    sayHi: () => {
        console.log(`Hi, I'm ${this.name}`); // Hi, I'm undefined as current context this is {}!
    },

    sayHiFunction: function() {
        console.log(`Hi, I'm ${this.name}`); // Hi, I'm Lei, function, so this means current user context
    },

    sayHiAlt() {
        console.log(`Hi, I'm ${this.name}`); // Hi, I'm Lei
    },

    teamMemberSayHi: function() {
        this.teamMember.map(member => {
            return `${member} is on team ${this.teamName}`; // works correct, arrow function keeps outside function this which is current user
        });

        this.teamMember.map(function(member) {
            return `${member} is on team ${this.teamName}`; // inner function use its own this context, so this is undefined
        });
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
    };
}
```
