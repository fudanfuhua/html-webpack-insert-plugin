# html-webpack-insert-plugin

[![Travis CI build status](https://img.shields.io/travis/danawoodman/react-fontawesome.svg)](https://travis-ci.org/danawoodman/react-fontawesome)
[![Dependency Status](https://img.shields.io/david/danawoodman/react-fontawesome.svg)](https://david-dm.org/danawoodman/react-fontawesome)
[![View on npm](https://img.shields.io/npm/dm/react-fontawesome.svg)](https://www.npmjs.com/package/react-fontawesome)
[![View on npm](https://img.shields.io/npm/v/react-fontawesome.svg)](https://www.npmjs.com/package/react-fontawesome)

> use "html-webpack-insert-plugin" to issert js or css to html templete, must work in with "html-webpack-plugin".


## Install

```
npm install --save-dev html-webpack-insert-plugin
```

## Usage

```js
const HtmlWebpackInsertPlugin = require('html-webpack-insert-plugin');

plugins: [
    new HtmlWebpackPlugin({
        ...
    }),
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
    new HtmlWebpackPlugin({
        title: 'bundle1',
        template: path.join(__dirname, 'src/template', 'index.html');,
        inject: 'body',
        filename: path.join(__dirname, 'tmp', 'index.html')
    }),
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
                "https://wq.koko.com/promote/css/works.css"
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
