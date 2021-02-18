---
author:
  name: GrahamSH
  bio: All about GrahamSH
  image: /logo.svg
title: My favorite npm packages
categories: nodejs npm
img: '/logo.svg'
---
As you probably know, npm is the package manager for Node.JS. Here are my 5 favorite npm packages.

## 5. [chalk](https://npmjs.com/package/chalk)
Chalk lets you print colored data to the console.
For example:
```js
const chalk = require('chalk');
console.log(chalk.blue('Hello world!'));
// Hello world
 ```

 ## 4. [Bijou.js](https://npmjs.com/package/bijou.js)
Bijou.js is a package that provides utilities for node and in the browser
```js
import { uuid } from 'https://unpkg.com/bijou.js';
console.log(uuid());
// c3435c88-0a20-491f-9391-3afde9c4a2d1
```
## 3. [node-fetch](https://npmjs.com/package/node-fetch)
Node-fetch is a package that provides ``fetch()`` for Node. It's awesome for fetching data in node applications, since the use is identical to ``window.fetch()``.
To fetch data, you could use it like this: 
```js
const fetch = require('fetch');
(async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();
  console.log(data)
 })();
 // {
 // "userId": 1,
 // "id": 1,
 // "title": "delectus aut autem",
 // "completed": false
 // }
 ```
 
## 2. [Vue](https://npmjs.com/package/vue)
Vue is a package that does all of your DOM manipulation for you. It's amazing, and is my tool of choice for any new projects.

## 1. [Nuxt](https://npmjs.com/package/vue)
Nuxt provides SSR for Vue. It also includes easier components, single file pages, layouts, and more. 
 
