---
title: 数据类型
---

### 快速导航

<TOC />

### 布尔类型（boolean）
  #### 和js一样，值为`true`或`false`。
  ```js
    let isTrue: boolean = true
  ```

### 数字（number）
  ```js
    let num: number = 1
  ```
### 字符串（string）
  可以使用单引号`''`, 双引号`""`,模版字符串 ``
  ```js
    let str: string = 'hello ts'
    let name: string = `csq`
  ```
### 数组
  1、在元素类型后面加[]
  ```js
    let arr: number[] = [1, 2, 3, 4]
  ```
  2、使用数组泛型，Array<元素类型>
  ```js
    let arr: Array[string] = ['a', 'b', 'c']
  ```
### 元组 Tuple
### 枚举（enum）
### Any
### Void
### Null和Undefined
### Never
### Object