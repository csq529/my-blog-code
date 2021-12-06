---
title: 比较两个数组
---

### 快速导航

<TOC />
:::tip 前言
我们在项目中经常遇到，将两个数组进行比较，比如：已保存的数据和原始的数据进行比较。
:::

```js
const initArr = [
  {
    name: '手机',
    id: 1,
    checked: false
  },
  {
    name: '电脑',
    id: 2,
    checked: false
  },
  {
    name: '相机',
    id: 3,
    checked: false
  },
  {
    name: '耳机',
    id: 4,
    checked: false
  }
]

const saveArr = [
  {
    name: '电脑',
    id: 2,
    checked: true
  },
  {
    name: '耳机',
    id: 4,
    checked: true
  }
]
```

### 方法一、在 `initArr`和`saveArr`两个数组中找出相同的项，一般的思路都是循环数组 `initArr`嵌套一个循环`saveArr`,像下面一样


```js
let data = []
initArr.forEach(i => {
  saveArr.forEach(k => {
    if (i.id === k.id) {
      data.push(i)
    }
  })
})
```
### 方法二、上面的思路是嵌套循环，但当数据量比较大的或者数据结构有多层的时候就需要多层嵌套，不仅执行效率低，而且代码不好理解；换一个思路是循环数据 initArr新建一个以id为索引的对象mapA，然后再循环saveArr对比mapA就能找出对应的项，如下：

```js
let mapA = {}
let result = []
initArr.forEach(item => {
  mapA[item.id] = item
})

saveArr.forEach(k => {
  if (mapA[k.id]) {
    result.push(k)
  }
})
```

### 方法三 利用filter和some结合

```js
const filterData = saveArr.filter(i => {
  return initArr.some(j => i.id !== j.id)
})
// filterData 就是过滤后的数据
```