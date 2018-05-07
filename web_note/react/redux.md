# Redux

## 0. install

`npm install --save redux react-redux`, `npm install --save-dev @types/react-redux`

## 1. Adding actions

Create `src/store/actions/**/index.tsx` folder. And add your actions here:

```tsx
export enum CounterActionType {
    Inc = 'inc',
    Dec = 'dec',
    Add = 'add',
    Sub = 'sub'
}

export interface CounterAction {
    type: CounterActionType;
    val?: number;
}

export const CounterActions = {
    increment: (): CounterAction => {
        return {
            type: CounterActionType.Inc
        };
    },

    decrement: (): CounterAction => {
        return {
            type: CounterActionType.Dec
        };
    },

    add: (val: number): CounterAction => {
        return {
            type: CounterActionType.Add,
            val: val,
        };
    },

    sub: (val: number): CounterAction => {
        return {
            type: CounterActionType.Sub,
            val: val,
        };
    }
};
```

## 2. adding reducers

Create `src/store/reducers/**/**.tsx` folder. And add your actions here:

```tsx
import { CounterAction, CounterActionType } from '../../actions/Counter/counter';

export interface CounterState {
    counter: number;
}

const initialState: CounterState = {
    counter: 0,
};

const CounterReducer = (state = initialState, action: CounterAction) => {

    const val = action.val ? action.val : 1;

    switch (action.type) {
        case CounterActionType.Inc:
            return {
                counter: state.counter + val
            };
        case CounterActionType.Dec:
            return {
                counter: state.counter - val
            };
        case CounterActionType.Add:
            return {
                counter: state.counter + val
            };
        case CounterActionType.Sub:
            return {
                counter: state.counter - val
            };
        default:
            return state;
    }

};

export default CounterReducer;
```

## 3. Connect reducer with React

in `src/store` folder, create `Store.tsx` and create store in this file:

```tsx
import { createStore, combineReducers, applyMiddleware } from 'redux';
import CounterReducer, { CounterState } from './reducers/Counter/counter';
import CounterResultReducer, { CounterResultState } from './reducers/Counter/result';
import createSagaMiddleware from 'redux-saga';
import { watchCounterResult } from './saga/index';

export interface StoreState {
    ctr: CounterState;
    res: CounterResultState;
}

const rootReducer = combineReducers({
    ctr: CounterReducer,
    res: CounterResultReducer,
});

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchCounterResult);

export default Store;
```

in `index.js/index.tsx`, Wrap the jsx with `Provider`.

```tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={Store} >
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
```

## 4. connect reducer with container

In container, we can connect the component with redux:

```tsx
const mapStateToProps = (state: StoreState): CounterStateProps => {
    return {
        ctr: state.ctr.counter,
        res: state.res.result
    };
};

const mapDispatchToProps = (dispatch: Dispatch<StoreState>): CounterDispatchProps => {
    return {
        onIncCounter: () => dispatch(CounterActions.increment()),
        onDecCounter: () => dispatch(CounterActions.decrement()),
        onAddCounter: (val) => dispatch(CounterActions.add(val)),
        onSubCounter: (val) => dispatch(CounterActions.sub(val)),
        onStoreResult: (result) => dispatch(CounterResultActions.storeResult(result))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```

## 5. use redux-thunk for async propcess (optional, I prefer the redux-saga)

**Note, current version of redux-thunk had a types error withe redux v4. Please use this to replace the default types file:**

```tsx
import { Middleware, Dispatch, Action, AnyAction } from 'redux';

export type ThunkAction<R, S, A extends Action = AnyAction, E = {}> = {
    (dispatch: Dispatch<A, S>, getState: () => S, extraArgument: E): R
}

declare module 'redux' {
    export interface Dispatch<A extends Action = AnyAction, S = {}> {
        <R, E>(thunk: ThunkAction<R, S, A, E>): R
    }
}

declare const thunk: Middleware & {
    withExtraArgument(extraArgument: any): Middleware;
};

export default thunk;
```

When create store, apply middleware `redux-thunk`.

```tsx
import { createStore, combineReducers, applyMiddleware } from 'redux';
import CounterReducer, { CounterState } from './reducers/Counter/counter';
import CounterResultReducer, { CounterResultState } from './reducers/Counter/result';
import thunk from 'redux-thunk';

export interface StoreState {
    ctr: CounterState;
    res: CounterResultState;
}

const rootReducer = combineReducers({
    ctr: CounterReducer,
    res: CounterResultReducer,
});

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
```

Then when create action, we can return a **async** function:

```tsx
export enum CounterResultActionType {
    STORE_RESULT = 'STORE_RESULT',
    DELETE_RESULT = 'DELETE_RESULT',
}

export interface CounterResultAction {
    type: CounterResultActionType;
    result?: number;
    id?: Date;
}

export const saveResult = (res: number): CounterResultAction => {
    return {
        type: CounterResultActionType.STORE_RESULT,
        result: res,
    };
};

export const storeResult = (res: number) => {
    return (dispatch: Dispatch) => {
        setTimeout(() => {
            dispatch(saveResult(res));
            // tslint:disable-next-line:align
        }, 2000);
    };
};
```