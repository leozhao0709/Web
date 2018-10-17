# [JS Date ](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)

## 1. new Date constructor

```js
new Date();
new Date(numberValue);
new Date(dateString);
new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
```

Note:

-   month range: [0, 11]

-   default timeZone is **UTC**

-   需要注意的是只能通过调用 Date 构造函数来实例化日期对象：以常规函数调用它（即不加 new 操作符）将会返回一个字符串，而不是一个日期对象。另外，不像其他 JavaScript 类型，Date 对象没有字面量格式。

-   当 Date 作为构造函数调用并传入多个参数时，如果数值大于合理范围时（如月份为 13 或者分钟数为 70），相邻的数值会被调整。比如 new Date(2013, 13, 1)等于 new Date(2014, 1, 1)，它们都表示日期 2014-02-01（注意月份是从 0 开始的）。其他数值也是类似，new Date(2013, 2, 1, 0, 70)等于 new Date(2013, 2, 1, 1, 10)，都表示时间 2013-03-01T01:10:00。

## 2. function

`Date.now()`
返回自 1970-1-1 00:00:00 UTC (世界标准时间)至今所经过的毫秒数。

`Date.parse()`
解析一个表示日期的字符串，并返回从 1970-1-1 00:00:00 所经过的毫秒数。

`Date.UTC()`
接受和构造函数最长形式的参数相同的参数（从 2 到 7），并返回从 1970-01-01 00:00:00 UTC 开始所经过的毫秒数。

## 3. some useful function

`Date.prototype.getDate()`
根据本地时间返回指定日期对象的月份中的第几天（1-31)

`Date.prototype.getDay()`
根据本地时间返回指定日期对象的星期中的第几天（0-6）。

`Date.prototype.getFullYear()`
根据本地时间返回指定日期对象的年份（四位数年份时返回四位数字）。

`Date.prototype.getHours()`
根据本地时间返回指定日期对象的小时（0-23）。

`Date.prototype.getMilliseconds()`
根据本地时间返回指定日期对象的微秒（0-999）。

`Date.prototype.getMinutes()`
根据本地时间返回指定日期对象的分钟（0-59）。

`Date.prototype.getMonth()`
根据本地时间返回指定日期对象的月份（0-11）。

`Date.prototype.getSeconds()`
根据本地时间返回指定日期对象的秒数（0-59）。

`Date.prototype.getTime()`
返回从 1970-1-1 00:00:00 UTC（协调世界时）到该日期经过的毫秒数，对于 1970-1-1 00:00:00 UTC 之前的时间返回负值。

`Date.prototype.getTimezoneOffset()`
返回当前时区的时区偏移。

`Date.prototype.setDate()` also works.
