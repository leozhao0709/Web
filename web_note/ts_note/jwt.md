# JWT (Json Web Token)

## 0. install

`npm install --save jsonwebtoken`, `npm install --save-dev @types/jsonwebtoken`

## 1. theory

The JWT example: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTUyMTkxMzg5Mn0.k_9NGcSD8Rb3Dc6HeyhLhakilJO8ans4TcO341_agh4`

Note JWT had 3 parts. We can split by `.`: 
1. HEADER (ALGORITHM & TOKEN TYPE): `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`
2. PAYLOAD (DATA): `eyJpZCI6MTAsImlhdCI6MTUyMTkxMzg5Mn0`
3. VERIFY (SIGNATURE): `k_9NGcSD8Rb3Dc6HeyhLhakilJO8ans4TcO341_agh4`

**The signature(3rd part) is encrypted by data(2nd part) and salt(only in server) using the algorithm(1st part)**.

## 2. log in process

1. User uses email and password to login.
2. Server receive crediential and if successfully credit, then using **userId (data)**, **salt** to sign the JWT token.
3. Server send signed token to client and client store the token.
4. Each time server wants send any info, it **should also send the token**. 
5. When server receive info, s**erver first verify the token**. Note the token can be splited to 3 parts. The 2nd part is the userId, then jwt uses this 2nd part and our server stored salt to get a signature again and finally compare this signature with 3rd part in token. If the signature match, then the jwt will decode the 2nd part data and we process the info. Otherwise, the verify process will give an error.

## 3. ts example

```ts
import * as jwt from 'jsonwebtoken';

const data = {
    id: 10
};

const token = jwt.sign(data, 'abc123');
const dataDeocde = jwt.verify(token, 'abc123');

console.log(token); // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTUyMTkxNTM0NX0.P5LNOx00pH5-fGKVh1clM1TTXS6z9K2ZoSfJztQaiXw

console.log(dataDeocde); // {id: 10, iat: 1521915345}

const dataDeocde = jwt.verify(token + 'aaa', 'abc123');
console.log(dataDeocde); // JsonWebTokenError: invalid signature
```

