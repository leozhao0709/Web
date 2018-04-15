# Stripe checkout

## 0. install

`npm install stripe`, `npm install @types/stripe --save-dev`

## 1. Api

[Stripe checkout](https://stripe.com/docs/api/node#charges)

## 2. example

```tsx
import { Router } from 'express';
import * as Stripe from 'stripe';
import { environment } from '../environment/environment';
import { auth } from '../middleware/auth';

export const paymentApi = Router();

const stripe = new Stripe(environment.STRIPE_SECRET);

paymentApi.post('/paycredits', auth, (req, res) => {
    if (!req.body.id) {
        res.status(400).send();
    }

    stripe.charges.create({
        amount: 500,
        currency: 'USD',
        source: req.body.id,
        description: '$5 for 5 credits',
    })
        .then(() => {
            req.user!.credits += 5;
            return req.user!.save();
        })
        .then(() => {
            res.send(req.user);
        })
        .catch(err => {
            res.status(500).send(err);
        })
        ;
});
```

Note: if we are using `react-stripe-checkout`, then the source for create a charge is the responsed token.id. (that's why here is the `req.body.id`)