[![Build Status](https://travis-ci.com/Alheimsins/uker-fra-dato.svg?branch=main)](https://travis-ci.com/Alheimsins/uker-fra-dato)
[![Coverage Status](https://coveralls.io/repos/Alheimsins/uker-fra-dato/badge.svg?branch=main&service=github)](https://coveralls.io/github/Alheimsins/uker-fra-dato?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# uker-fra-dato

Count weeks from a given date or between two dates.

Returns 0 for end date in the past.

Does only calculate from date and not time.

# Usage

```JavaScript
const wfd = require('@alheimsins/uker-fra-dato')
const start = new Date('2020-09-07')
const endOne = new Date('2020-09-13')
const endTwo = new Date('2020-09-14')
const endPast = new Date('2019-05-01')

console.log(wfd(start, endOne)) //=> 0
console.log(wfd(start, endTwo)) // => 1
console.log(wfd(start, endPast)) // => 0
```

# License

[MIT](LICENSE)

## About

Created with ❤ for [Alheimsins](https://alheimsins.net)

<img src="https://image.ibb.co/dPH08G/logo_black.png" alt="Alheimsins logo" height="150px" width="150px" />
