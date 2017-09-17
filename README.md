# html-webpack-insert-plugin

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Travis CI build status](https://img.shields.io/travis/danawoodman/react-fontawesome.svg)](https://travis-ci.org/danawoodman/react-fontawesome)
[![Dependency Status](https://img.shields.io/david/danawoodman/react-fontawesome.svg)](https://david-dm.org/danawoodman/react-fontawesome)
[![View on npm](https://img.shields.io/npm/dm/react-fontawesome.svg)](https://www.npmjs.com/package/react-fontawesome)
[![View on npm](https://img.shields.io/npm/v/react-fontawesome.svg)](https://www.npmjs.com/package/react-fontawesome)

> use webpack to issert js or css to html templete.


## Install

```
npm install --save-dev html-webpack-insert-plugin
```

## Usage

```js
const HtmlWebpackInsertPlugin = require('html-webpack-insert-plugin');

plugins: [
  new HtmlWebpackInsertPlugin({
      paths: {
          js: [...],
          css: [...]
      }
  })
]
```

## Examples

```js
const HtmlWebpackInsertPlugin = require('html-webpack-insert-plugin');

plugins: [
  new HtmlWebpackInsertPlugin({
      paths: {
          js: [
              "/asset/layer-mobile/layer.js",
              "/asset/js/zepto/zepto.min.js",
              "/asset/js/sm/sm.js",
              "/asset/js/sm/sm-city-picker.min.js",
              "/asset/js/fastclick/fastclick.min.js"
          ],
          css: [
              "/asset/css/font-awesome/css/font-awesome.min.css",
              "/asset/layer-mobile/need/layer.css",
              "/asset/css/citypicker.css",
              "https://ad.ifeng.com/promote/css/chooseGoods.css"
          ]
      }
  })
]
```

## Contributing

Pull requests welcome! 


## License

[MIT](license) &copy; [fudanfuhua][author]


[author]: https://github.com/fudanfuhua
