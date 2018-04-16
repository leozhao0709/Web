# Proxy

## 1. proxy setup

When you are using react and proxy, then you need to setup proxy in `package.json`. Here's an example how to use proxy.

```json
"proxy": {
    "/auth/google/*": {
        "target": "http://localhost:5000"
    },
    "/payment/*": {
        "target": "http://localhost:5000"
    }
},
```