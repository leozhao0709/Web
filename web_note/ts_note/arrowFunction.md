# Arrow function

## 0. Note

*   Arrow function won't bind `this`. (actually it's keep current context!)

## 1. legacy arrow function tricky

```ts
const user = {
    // we don't have a this in this object unless someone instantiate then it has context this! that's why arrow function can't get a this.
    name: 'Lei',
    teamMember: ['Lei', 'Joe', 'Ben'],
    teamName: 'Spitfire',
    sayHi: () => {
        console.log(`Hi, I'm ${this.name}`); // Hi, I'm undefined as current context this is undefine!
    },

    sayHiFunction: function () {
        console.log(`Hi, I'm ${this.name}`); // Hi, I'm Lei
    },

    sayHiAlt() {
        console.log(`Hi, I'm ${this.name}`); // Hi, I'm Lei
    },

    teamMemberSayHi: function() {
        this.teamMember.map(member => {
            return `${member} is on team ${this.teamName}` // works correct
        })

        this.teamMember.map(function(member) => {
            return `${member} is on team ${this.teamName}` // not works correct as function lost context this because no one instantiate an object to call this function
        })
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
