# GeoLocation

## 1. [get GeoLocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition)

`navigator.geolocation.getCurrentPosition(successCallback, errorCallback, [options])`

```js
window.onload = () => {
    navigator.geolocation.getCurrentPosition(
        pos => {
            console.log(pos);
        },
        err => {
            console.log(err);
        }
    );
};
```
