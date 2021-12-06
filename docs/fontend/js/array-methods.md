---
title: JS数组中的一些实用方法
---

### 快速导航

<TOC />

### forEach
- 语法
```js
  array.forEach(function(currentValue, index, arr), thisValue)

  /**
   * @params function(currentValue, index, arr) 必须。数组中每个元素都需要调用函数。
   *         函数参数: currentValue 必须。当前元素。
   *                  index         可选。当前元素索引。
   *                  arr           可选。当前元素所属的数组对象。
   * 
   *@params thisValue               可选。传递给函数的值一般用“this” 值。如果这个参数为空，
   *                                "undefined" 会传递给"this"值
   * 
  */
```
#### 功能：循环遍历数组中的每一项,只能遍历数组
#### 特点:
- forEach没有返回值，本质上等同于for循环，对每一项执行 function 函数。即map是返回一个新数组，原数组不变，forEach 是改变原数组的。
- 不支持continue, 用return true 或 return false 代替。
- 不支持break,用try catch/some/ every 代替。

#### try catch 实现break
```js
try {
  let arr = [1, 2, 3, 4]
  arr.forEach((item, index) => {
    if (item === 3) {
      throw new Error('EndIterative')
    }

    console.log('item:', item) // item: 1, item: 2
  })
} catch(e) {
  if(e.message!="EndIterative") throw e;
}
```
#### every 实现break
```js
let arr = [1, 2, 3, 4, 5]
let num = 3
arr.every(item => {
  if (item === num) {
    return false
  } else {
    console.log('item:', item) // item: 1, item: 2
    return true
  }
})
```

#### some 实现continue
```js
let arr = [1, 2, 3, 4, 5]
let num = 3
arr.some(item => {
  if (item === num) {
    return
  }
  console.log('item:', item) // 1 2 4 5
})
```

### map
#### 语法

```js
array.map(function(currentValue, index, array), thisValue)

/**
 * @params function(currentValue, index, array) 必须。函数，数组中每个元素都会执行这个函数
 *         函数参数：currentValue  必须。当前元素的值
 *                  index         可选。当前元素的索引
 *                  array         可选。当前元素属于的数组对象
 * 
 * @params thisValue 可选。对象作为执行回调时使用，传递给函数，用作"this"的值
 *                    如果省略了thisValue，或者传入null undefined,那么回调函数的this为全局对象。
 * 
*/
```

#### 功能：循环遍历数组中的每一项,只能遍历数组

#### 特点

- map() 方法会返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
- map() 方法按照原始数组元素顺序依次处理元素。
- map() 不会对空数组进行检测。
- map() 不会改变原数组。

#### 应用
#### 1.将 a 数组中的值以双倍的数值放到 b 数组中
```js
  let a = [1, 2, 3, 4, 5]
  let b = a.map(item => item * 2) // [2, 4, 6, 8, 10]
```
#### 2. 处理接口参数, 把返回的新数组当作参数，传给后端
```js
  let a = [
    {
      id: 1,
      value: 1
    },
    {
      id: 2,
      value: 2
    }
  ]
  let idArr = a.map(item => item.id) // [1, 2]
```

### filter
#### 语法

```js
array.filter(function(currentValue, index, array), thisValue)

/**
 * @params function(currentValue, index, array) 必须。函数，数组中每个元素都会执行这个函数
 *         函数参数：currentValue  必须。当前元素的值
 *                  index         可选。当前元素的索引
 *                  array         可选。当前元素属于的数组对象
 * 
 * @params thisValue 可选。对象作为执行回调时使用，传递给函数，用作"this"的值
 *                   如果省略了thisValue，或者传入null undefined,那么回调函数的this为全局对象。
 * 
*/
```

#### 功能
`filter`用于对数组进行过滤。它会创建一个新数组，新数组里面的元素是通过检查指定数组中符合条件的所有元素

#### 特点
- filter不会对空数组进行检测
- 不会改变原数组

#### 应用

```js
let arr = [
  { name: 'jack', sex: '男', age: 19 },
  { name: 'rose', sex: '女', age: 20 },
  { name: 'tom', sex: '男', age: 20 },
  { name: '詹姆斯', sex: '男', age: 21 },
  { name: '浓眉', sex: '男', age: 22 },
  { name: '格林', sex: '男', age: 22 }
]
let newArr = arr.filter(item => {
  return item.sex === '女'
})
console.log('newArr:', newArr) // [{ name: 'rose', sex: '女', age: 20 }]
```

### find
#### 语法
```js
array.find(function(currentValue, index, array), thisValue)

/**
 * @params function(currentValue, index, array) 必须。函数，数组中每个元素都会执行这个函数
 *         函数参数：currentValue  必须。当前元素的值
 *                  index         可选。当前元素的索引
 *                  array         可选。当前元素属于的数组对象
 * 
 * @params thisValue 可选。对象作为执行回调时使用，传递给函数，用作"this"的值
 *                   如果省略了thisValue，或者传入null undefined,那么回调函数的this为全局对象。
 * 
*/
```
#### 功能
用来查找目标元素，若找到就返回该元素，没有找到就会返回 undefined
#### 特点

- find()方法返回通过测试（函数内部判断）的数组的第一个元素
- 当数组中的元素在测试条件时返回true时，find()返回符合条件的元素，之后的值不会再调用执行函数，如果没有符合条件的元素返回undefined
- 不会改变原数组

#### 应用
#### 找到符合的第一个对象
```js
// 找到符合的第一个对象
let arr = [
  { name: 'jack', age: 18 },
  { name: 'tom', age: 19},
  { name: 'jack', age: 18 }
]

let newArr = arr.find(item => item.name === 'jack')
console.log('newArr:', newArr) // { name: 'jack', age: 18 }
```

#### 根据指定对象的条件找到数组中符合条件的对象
```js
let arr = [
  { name: 'jack', age: 18, id: 1 },
  { name: 'tom', age: 19, id: 2},
  { name: 'james', age: 22, id: 3 }
]

let obj = { name: 'james', age: 22, id: 3 }

function findDetail(arr, obj) {
  return arr.find(item => {
    return item.id === obj.id
  })
}
let newArr = findDetail(arr, obj)
```

### every
```js
array.every(function(currentValue, index, array), thisValue)

/**
 * @params function(currentValue, index, array) 必须。函数，数组中每个元素都会执行这个函数
 *         函数参数：currentValue  必须。当前元素的值
 *                  index         可选。当前元素的索引
 *                  array         可选。当前元素属于的数组对象
 * 
 * @params thisValue 可选。对象作为执行回调时使用，传递给函数，用作"this"的值
 *                   如果省略了thisValue，或者传入null undefined,那么回调函数的this为全局对象。
 * 
*/
```
#### 功能 
`every()` 方法用于检测数组所有元素是否符合指定条件（通过函数提供）

#### 特点
- `every()` 方法使用指定函数检测数组中的所有元素：
- 如果数组中检测到有一个元素不满足，则整个表达式返回false，且剩余的元素不会再进行检测。
- 如果所有元素都满足条件，则返回false。
- `every()` 不会对空数组进行检测。
- `every()` 不会改变原数组。

#### 应用

```js
let arr = [1, 2, 3, 4, 5]
let newArr = arr.every(item => {
  return item < 6
})
console.log('newArr:', newArr) // true
```

### some
#### 语法

```js
array.some(function(currentValue, index, array), thisValue)

/**
 * @params function(currentValue, index, array) 必须。函数，数组中每个元素都会执行这个函数
 *         函数参数：currentValue  必须。当前元素的值
 *                  index         可选。当前元素的索引
 *                  array         可选。当前元素属于的数组对象
 * 
 * @params thisValue 可选。对象作为执行回调时使用，传递给函数，用作"this"的值
 *                   如果省略了thisValue，或者传入null undefined,那么回调函数的this为全局对象。
 * 
*/
```

#### 功能
`some()` 方法用于检测数组中的元素是否满足指定条件
#### 特点
- some() 方法会依次执行数组的每个元素
- 如果有一个元素满足条件，则表达式返回true, 剩余的元素不会再执行
- 如果没有满足条件的元素，则返回false。
- some() 不会对空数组进行检测
- some() 不会改变原数组
#### 应用

```js
let arr = [1, 2, 3, 4]
let newArr = arr.some(item => item > 3)
console.log('newArr:', newArr) // true
```


