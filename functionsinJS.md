There are many useful array methods in JavaScript that can help you manipulate and work with arrays. Some of the most commonly used array methods include:

- `map()`: This method creates a new array with the results of calling a provided function on every element in the calling array.
- `filter()`: This method creates a new array with all elements that pass the test implemented by the provided function.
- `forEach()`: This method executes a provided function once for each element in an array, in order.
- `find()`: This method returns the value of the first element in the array that satisfies the provided testing function.
- `findIndex()`: This method returns the index of the first element in the array that satisfies the provided testing function.
- `every()`: This method tests whether all elements in the array pass the test implemented by the provided function.
- `some()`: This method tests whether at least one element in the array passes the test implemented by the provided function.
- `sort()`: This method sorts the elements of an array in place and returns the sorted array.

Syntax and examples:

- `map()`: The `map()` method creates a new array with the results of calling a provided function on every element in the calling array. The syntax for `map()` is `array.map(callback(currentValue[, index[, array]])[, thisArg])`. Here's an example that uses `map()` to square all elements in an array:

```javascript
const numbers = [1, 2, 3, 4];
const squares = numbers.map(x => x * x);
console.log(squares); // [1, 4, 9, 16]
```

- `filter()`: The `filter()` method creates a new array with all elements that pass the test implemented by the provided function. The syntax for `filter()` is `array.filter(callback(element[, index[, array]])[, thisArg])`. Here's an example that uses `filter()` to remove all elements less than 10 from an array:

```javascript
const numbers = [5, 12, 8, 130, 44];
const filtered = numbers.filter(x => x >= 10);
console.log(filtered); // [12, 130, 44]
```

- `forEach()`: The `forEach()` method executes a provided function once for each element in an array, in order. The syntax for `forEach()` is `array.forEach(callback(currentValue [, index [, array]])[, thisArg])`. Here's an example that uses `forEach()` to log all elements in an array:

```javascript
const numbers = [1, 2, 3, 4];
numbers.forEach(x => console.log(x));
// logs: 
// 1
// 2
// 3
// 4
```

- `find()`: The `find()` method returns the value of the first element in the array that satisfies the provided testing function. The syntax for `find()` is `array.find(callback(element[, index[, array]])[, thisArg])`. Here's an example that uses `find()` to find the first element greater than 10 in an array:

```javascript
const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(x => x > 10);
console.log(found); // 12
```

- `findIndex()`: The `findIndex()` method returns the index of the first element in the array that satisfies the provided testing function. The syntax for `findIndex()` is `array.findIndex(callback(element[, index[, array]])[, thisArg])`. Here's an example that uses `findIndex()` to find the index of the first element greater than 10 in an array:

```javascript
const numbers = [5, 12, 8, 130, 44];
const foundIndex = numbers.findIndex(x => x > 10);
console.log(foundIndex); // 1
```

- `every()`: The `every()` method tests whether all elements in the array pass the test implemented by the provided function. The syntax for `every()` is `array.every(callback(element[, index[, array]])[, thisArg])`. Here's an example that uses `every()` to check if all elements in an array are greater than or equal to 10:

```javascript
const numbers = [12, 54, 18, 130, 44];
const isEvery = numbers.every(x => x >= 10);
console.log(isEvery); // true
```

- `some()`: The `some()` method tests whether at least one element in the array passes the test implemented by the provided function. The syntax for `some()` is `array.some(callback(element[, index[, array]])[, thisArg])`. Here's an example that uses `some()` to check if at least one element in an array is greater than or equal to 10:

```javascript
const numbers = [2, 5, 8, 1, 4];
const isSome = numbers.some(x => x >= 10);
console.log(isSome); // false
```

- `sort()`: The `sort()` method sorts the elements of an array in place and returns the sorted array. The syntax for `sort()` is `array.sort([compareFunction])`. Here's an example that uses `sort()` to sort an array of numbers in ascending order:

```javascript
const numbers = [4, 2, 5, 1, 3];
numbers.sort((a,b) => a - b);
console.log(numbers); // [1,2,3,4,5]
```
