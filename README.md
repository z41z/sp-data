# sp-fe-beta

Common Function for Date, Array, Object, Array of Objects, Parse Data etc.

***

## Install

### NPM

``` node
npm install --save sp-fe-beta
// or yarn add sp-fe-beta
```

### CDN

```html
<script src="https://unpkg.com/sp-fe-beta/dist/sp-fe.min.js"></script>
<script>
  sp.array.create(5, 0);
  //=> [0, 0, 0, 0, 0]
</script>
```

***

## Usage

```js
 //sp: {date, array, object, parse}
const sp = require('sp-fe-beta');

sp.date.format('yyyy-MM-dd', new Date());
//=> 2018-08-06

sp.array.sort(arr = [1, 2, 3, 4, 1], isASC = true)
//=>[1, 1, 2, 3, 4]

sp.array.sort(arr = [1, 2, 3, 4, 1], isASC = false)
//=>[4, 3, 2, 1, 1]
```

### Date

```js
//date: format(), goto(), prevDay(), prevMonth(), prevYear(), nextDay(), nextMonth(), nextYear(), calc()
const date = require('sp-fe-beta/date');

date.format('yyyy-MM-dd', new Date());
//=> 2018-08-06

date.goto(year, month, day);
//=> return Date

date.prevDay(dayCount = 0, startDate = new Date());
//=> return Date

date.prevMonth(monthCount = 0, date = new Date());
//=> return Date

date.prevYear(yearCount = 0, date = new Date());
//=> return Date

date.nextDay(dayCount = 0, startDate = new Date());
//=> return Date

date.nextMonth(monthCount = 0, date = new Date());
//=> return Date

date.nextYear(yearCount = 0, date = new Date());
//=> return Date

date.calc(startDate = new Date(2018, 01, 01), endDate = new Date());
//=> { seconds: 20, minutes: 44, hours: 15, days: 188 }

date.calc(startDate = new Date(2018, 01, 01), endDate = new Date(2000, 01, 01));
//=> { seconds: 0, minutes: 0, hours: 0, days: 6575 }

```

### Array && Array of Objects

```js
 //arr: create(), sort(), sortObj(), unique(), uniqueObj(), filter(), sum(), createByArrObj()
const arr = require('sp-fe-beta/array');

arr.create((length = 5, fillVal = 'a'))
//=>['a', 'a', 'a', 'a', 'a']

arr.sort(arr = [1, 2, 3, 4, 1], isASC = true)
//=>[1, 1, 2, 3, 4]

arr.sort(arr = [1, 2, 3, 4, 1], isASC = false)
//=>[4, 3, 2, 1, 1]

arr.sortObj(arr = [{name: 'Alice', age: 12},{name: 'Bob', age: 14}, {name: 'John', age: 11}], keyName = 'age', isASC = true)
//=>[{name: 'John', age: 11}, {name: 'Alice', age: 12},{name: 'Bob', age: 14}]

arr.sortObj(arr = [{name: 'Alice', age: 12},{name: 'Bob', age: 14}, {name: 'John', age: 11}], keyName = 'age', isASC = false)
//=>[{name: 'Bob', age: 14}, {name: 'Alice', age: 12}, {name: 'John', age: 11}]

arr.unique(arr = [1, 2, 3, 4, 1])
//=>[1, 2, 3, 4]

arr.uniqueObj(arr = [{a: 1, b: 2}, {a: 2, b: 3}, {a: 1}], keyName = 'a')
//=>[{a: 1, b: 2}, {a: 2, b: 3}]

arr.uniqueObj(arr = [{a: 1, b: 2}, {a: 2, b: 3}, {a: 1}], keyName = 'a', isDeep = true)
//=>[{a: 1, b: 2}, {a: 2, b: 3}, {a: 1}]

arr.filter(arr = [1, 3, 4, 5], function(item) {return item > 3;})
//=>[4, 5]

arr.filter(arr = [{name: 'Alice', age: 12},{name: 'Bob', age: 14}, {name: 'John', age: 11}], function(item) {return item.age > 12;})
//=>[{name: 'Bob', age: 14}]

arr.sum(arr = [1, 2, 3])
//=>6

//item is NOT number string return 0
arr.sum(arr = [1, 2, 3, 'a', 'b'])
//=>6

//sum by index => value
arr.sum(arr = [[1, 2, 3], [4, 5, 6], [7, 8], [9]], idDeep = true)
//[1 + 4 + 7 + 9, 2 + 5 + 8, 9]
//=>[ 21, 15, 9]

//sum by key => value
arr.sum(arr = [{a: 1, b: 2, c: 3}, {a: 4, b: 5}, {c: 6}, {d: 7}], idDeep = true)
//[{a: 1 + 4, b: 2 + 5, c: 3 + 6, d: 7}]
//=>[ { a: 5, b: 7, c: 9, d: 7 } ]

arr.createByArrObj(arrObj = [ { a: 3, b: 7}, {a: 0, b: 3}, {a: 2, b: 4} ], indexName = 'a', valueName = 'b')
//=>[ 3, 0, 4 ]

arr.createByArrObj(arrObj = [ { a: 3, b: 7},{a: 0, b: 3}, {a: 2, b: 4} ], indexName = 'a', valueName = 'b', length = 6)
//=>[ 3, 0, 4, 7, 0, 0 ]

arr.createByArrObj(arrObj = [ { a: 3, b: 7}, {a: 0, b: 3}, {a: 2, b: 4} ], indexName = 'a', valueName = 'b', length = 6, defaultValue = 666)
//=>[ 3, 666, 4, 7, 666, 666 ]
```

### Object

```js
//obj: reverse(), rename()
const obj = require('sp-fe-beta/object');

obj.reverse(obj = {a: 1, b: 2})
//=> {1: a, 2: b}

obj.reverse(obj = {a: 1, b: 2}, keyName = 'a')
//=> {1: a, b: 2}

obj.reverse(obj = [{a: 1, b: 2}, {a: 2, b: 3, d: 5}])
//=> [ { '1': 'a', '2': 'b' }, { '2': 'a', '3': 'b', '5': 'd' } ]

//last value will be the last key
obj.reverse(obj = [{a: 1, b: 2}, {a: 2, b: 3, c: 5, d: 5, e: 5}])
//=>[ { '1': 'a', '2': 'b' }, { '2': 'a', '3': 'b', '5': 'e' } ]

obj.reverse(obj = [{a: 1, b: 2}, {a: 2, b: 3, d: 5}], keyName = 'a')
//=> [ { '1': 'a', b: 2 }, { '2': 'a', b: 3, d: 5 } ]

//Object {}
obj.rename(obj = { a: 2, b: 3, c: 5, d: 5, e: 5 })
//=>{ a: 2, b: 3, c: 5, d: 5, e: 5 }

obj.rename(obj = { a: 2, b: 3, c: 5, d: 5, e: 5 }, target = 'a')
//=>{b: 3, c: 5, d: 5, e: 5 }

obj.rename(obj = { a: 2, b: 3, c: 5, d: 5, e: 5 }, target = 'a', replacer = 'x')
//=>{x:2, b: 3, c: 5, d: 5, e: 5 }

//Array of Objects
obj.rename(obj = [{ a: 2, b: 3}, {a: 3, b: 5}])
//=>[{ a: 2, b: 3}, {a: 3, b: 5}]

obj.rename(obj = [{ a: 2, b: 3}, {a: 3, b: 5}], 'a')
//=>[{b: 3}, {b: 5}

obj.rename(obj = [{ a: 2, b: 3, c: 4}, {a: 3, b: 5}], 'c', 'x')
//=>[{ a: 2, b: 3, x: 4}, {a: 3, b: 5}]
```

### Parse

```js
//parse: number(), bollean()
const parse = require('sp-fe-beta/parse');

//undefined, [] ,{} ,NaN ,'' ,' ', null or not number string return 0
parse.number(num = [], fixedLength = 0)
//=> 0

parse.number(num = {}, fixedLength = 2)
//=> 0.00

parse.number(num = 'a', fixedLength = 2)
//=> 0.00

parse.number(num = '2', fixedLength = 2)
//=> 2.00

parse.number(num = '2.000', fixedLength = 2)
//=> 2.00

//undefined, [] ,{} ,NaN ,'' ,' ', null return false
parse.boolean(0)
//=> false

//undefined, [] ,{} ,NaN ,'' ,' ', null return false
parse.boolean('a')
//=> true
```

## License

MIT
