# Props and Event binding

## 1. props binding

In angular, you can pass a props to a component by using `[prop]`. And within the component, you should use `@Input('aliasName') property;` to bind it.

## 2. Event binding

In angular, you can define `@Output('aliasName') event = new EventEmitter<>();` a event that when outside use this component, they must define the event handler and inside the event, make sure when you want to trigger this event, use `event.emit()` to emit the event. And in outside component, you should use `(event)="eventHandler($event)"` to receive data and you should define `eventHandler(data)` function to handle the event.
