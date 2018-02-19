# Array

## 1. forEach

```js
const images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
let areas = [];

images.forEach((image) => {
    areas.push(image.height * image.width)
})
```

## 2. map

Don't forget **return**.

```js
let images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights;

heights = images.map((image) => {
    return image.height;
})
```

## 3. filter

Don't forget **return**;

```js
const numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

let filteredNumbers;

filteredNumbers = numbers.filter((number) => {
    return number > 50;
})
```

## 4. find

Find will find the **first element** that matches the condition.

```js
const users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

let admin;

admin = users.find((user) => {
    return user.admin;
})
```

## 5. every

return true that **every** of elements in array match the condition.

```js
const users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

let hasSubmitted;

hasSubmitted = user.every((user) => {
    return user.hasSubmitted;
})
```

## 6. some

return true that **some** of elements in array match the condition.

```js
const requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

let inProgress;
inProgress = requests.some((request) => {
    return request.status;
})
```

## 7. reduce

take a initial value, and use this value to do an accumulate or some function and return the result to this value.

```js
const trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

let totalDistance;

totalDistance = trips.reduce((previous, trip) => {
    return sum + trip.distance;
}, 0)
```