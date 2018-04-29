# tslint

## 1. jsx-boolean-value (since v2.5.0)

*   When using a **boolean** attribute in JSX, you can set the attribute value to true or omit the value. This rule will enforce one or the other to keep consistency in your code.

*   Rule options: `["always", "never"]`

*   Default is set to `always`

*   I prefer set it to

    ```json
    "jsx-boolean-value": [
        "never"
    ],
    ```

## 2. semicolon

`ignore-bound-class-methods` can add a semicolon to end of each method

```json
"semicolon": [
    true,
    "always",
    "ignore-bound-class-methods"
],
```
