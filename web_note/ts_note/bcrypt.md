# Bcrypt

## 0. install

`npm install --save bcryptjs`, `npm install --save-dev @types/bcryptjs`

## 1. theory

bcrypted hash password example: `$2a$12$JkQrTxLYkV3iAXbdJuoNhOyozsOp1MInO5sxFOJrXKfVBsaCai1i.`

Note, we can use `$` to split the hash to 3 part. The first part is algorithm used to crypted. The second part is a part which will affect the cryted data(generate salt using). The 3rd part is the salt and hashed hash.

Each time the bcrypt will generate a random salt and using this random salt and original password to generate the 3rd part hashed hash. 

For verify password, the bcrypt will use the new password send and the salt that already in database to compare the new hash using this 2 part with the hash part that stored in database. If it matches, then successfully granted crediential.

## 2. bcryptjs

```ts
import * as bcrypt from 'bcryptjs'

// generate hash password
bcrypt.genSalt(10)
    .then(salt => {
        return bcrypt.hash(this.password, salt);
    })
    .then(hash => {
        this.password = hash;
        next();
    })
    .catch(err => {
        return Promise.reject(err);
    });

// verify password
bcrypt.compare(password, user.password)
    .then(result => {
        if (result) {
            return Promise.resolve(user);
        }
        return Promise.reject(notFoundMessage);
    }).catch(err => {
        return Promise.reject(err);
    });
```