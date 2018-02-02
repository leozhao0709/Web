# Form

## 0. basic input

```html
<label for="">
  <input type="text" placeholder="name" autofocus autocomplete="off" required/>
</label>
```

Note:

- `autofocus` will get the first respond after refresh

- `autocomplete` default value is `on`

- `required` is the html validitor

## 1. email

```html
<label for="">
  email
  <input type="email" name="email" />
</label>
```

## 2. url

```html
<label for="">
  url
  <input type="url" name="url" />
</label>
```

## 3. number

```html
<label for="">
  number
  <input type="number" name="number" />
</label>
```

## 4. tel

```html
<label for="">
  tel
  <input type="tel" name="tel" />
</label>
```

## 5. seach

```html
<label for="">
  search
  <input type="search" name="search" />
</label>
```

## 6. range

```html
<label for="">
  range
  <input type="range" name="range" value="90" min="0" max="300" />
</label>
```

## 7. color

```html
<label for="">
  color
  <input type="color" name="color" />
</label>
```

## 8. date, month, week, time

```html
<label for="">
  time
  <input type="time" name="time" />
</label>

<label for="">
  date
  <input type="date" name="date" />
</label>

<label for="">
  month
  <input type="month" name="month" />
</label>

<label for="">
  week
  <input type="week" name="week" />
</label>
```

## 9. input with selection

```html
<label for="">
  <input type="text" list="car" />

  <datalist id="car">
    <option>abc</option>
    <option>acd</option>
    <option>bce</option>
    <option>ebc</option>
  </datalist>
</label>
```

## 10. Meter

```html
<label for="">
  <meter value="50" min="0" max="100" low="30" high="80"></meter>
</label>
```

## 11. Progress

```html
<label for="">
  <progress value="40" max="100"></progress>
</label>
```

## 12. File

```html
<label for="">
  <input type="file" name="file" multiple/>
</label>
```

Note:

- `multiple` can let us select multiple files

## 13. close default form validator

Using `novalidate` to close default form validator.

```html
<form action="" novalidate>
</form>
```

## 14. customize for validator

Using pattern and regular expression to do this validator.

```html
<label for="">
  tel
  <input type="tel" name="tel" pattern="1\d{5}" />
</label>
```