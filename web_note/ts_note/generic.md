# Generic in typescript

## 1. usage

```ts
interface Comparable<T> {
    compareTo(item: T) : number
}

class Sales implements Comparable<Sales> {
    constructor(private country: Country, private amount: number) {
    }
    compareTo(item: Sales) : number {
        if (this.amount > item.amount) {
            return 1
        }
        else {
            return -1;
        }
    }
}

class OrderedList<T extends Comparable<T>> {
    constructor(private data: T[]) {
    }
    maxItem() : T {
        let max = this.data[0];
        for (let element of this.data) {
            if (element.compareTo(max) == 1) {
                max = element;
            }
        }
        return max;
    }
    // minItem, sort...
}

let sales : Sales[] = [new Sales(Country.US, 35600),
    new Sales(Country.JP, 48900), new Sales(Country.US, 8900)];

const salesList = new OrderedList<Sales>(sales);

console.log(salesList.maxItem());
```