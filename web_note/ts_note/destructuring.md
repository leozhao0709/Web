# Destructuring

## 1. object destructuring

Note the object destructuring can be use a **different order** to desctruct.

```js
const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer({department, title}) {
  return title === 'Engineer' && department === 'Engineering';
}
```

## 2. array destructuring

Note the array destructuring **must** be use a **order to order** to desctruct.

```js

const array = [1,2,3,4];

// a=1, b=2,c=[3,4]
const [a,b,...c] = array;

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
    return {
        subject,
        time,
        teacher
    };
})
```