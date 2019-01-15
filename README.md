# Comsummation

## What?

Gives you the _k_-combinations for all _k_

Imagine a world where you had a weight-adjustable dumbell with weights consisting of [0.5, 1.25, 2.5] kg and wanted to figure out the possible summed-combinations. This would be [0.5, 1.25, 1.75, 2.5, 3, 3.75].

Maths dweebs call this _k_-combinations for all _k_. Why they do that, I have no idea. They are weird and never give you actual applications of the things they invent, or examples. So here is one.

## How Do

### Install

`npm install --save comsummation`

### Usage

```javascript
  const com = require('comsummation')
  const kCombs = com([0.5, 1.25, 2.5]) // [0.5, 1.25, 1.75, 2.5, 3, 3.75]
```