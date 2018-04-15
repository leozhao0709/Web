# React-stripe-checkout

## 0. install

`npm install --save react-stripe-checkout`

## 1. reference

[react-check-out](https://github.com/azmenak/react-stripe-checkout)

## 2. example

```tsx
import StripeCheckout from 'react-stripe-checkout';

<div className={styles.payments} >
    <StripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        token={(token) => {
            // tslint:disable-next-line:no-console
            console.log(token);
        }}
        stripeKey={process.env.REACT_APP_STRIPE_KEY!}
    >
        <button className={styles.btn} >Add Credits</button>
    </StripeCheckout>
</div>
```

Note: the amount should be calculated by **cents**