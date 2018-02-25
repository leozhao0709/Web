# Redux Saga

Redux saga is a package used for **async** propcess for redux.

The Redux-saga works in this way: add one more actions for saga. A UI container dispatch an actio and this action is used to trigger saga. Note, not trigger redux, it's trigger saga.

Then in saga, do any async process, after finish doing the async process, then put(dispatch) another action defined in actions, then this action trigger a redux to change the state. Finally, the state change lead the UI change.

## 0. install

`npm install --save redux=saga`

## 1. add saga for your store

add saga as an middleware for your store.

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

## 2. create your own saga (async process)

create `src/store/saga` folder.

Then create your own saga file. Example: create `src/store/saga/counterResult.tsx`:

```tsx
import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { CounterResultAction, CounterResultActions } from '../../actions/Counter/result';

export function* storeResultSaga(action: CounterResultAction) {
    yield delay(2000);
    yield put(CounterResultActions.storeResultSucceed(action.result!));
}
```

The delay menthod is like a `settimeout`, the put method is just like a `dispatch`. But note here is using generators.

## 3. add your own saga in watch-saga

create `src/store/saga/index.tsx`, then add your watch saga here:

```tsx
import { takeEvery, all } from 'redux-saga/effects';
import { storeResultSaga } from './Counter/counter';
import { CounterResultActionType } from '../actions/Counter/result';

export function* watchCounterResult() {
    yield all([
        takeEvery(CounterResultActionType.STORE_RESULT, storeResultSaga),
    ]);
}
```

Note this is a watch saga, it works like the gulp watch. Then we should watch this watchsaga in store.

```tsx
// in your store.tsx, add:

sagaMiddleware.run(watchCounterResult);
```