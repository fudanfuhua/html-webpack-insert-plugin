'use strict';

function htmlWebpackInsertPlugin(options) {
    this.options = !!options ? options : {paths: {js:[], css:[]}};
}

htmlWebpackInsertPlugin.prototype.apply = function(compiler) {
    var paths = this.options.paths;
    if (!paths.js.length && !paths.css.length) return;
    compiler.plugin('compilation', function(compilation, options) {
        compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
            for (var i = paths.js.length - 1; i >= 0; i--) {
                htmlPluginData.assets.js.unshift(paths.js[i]);
            };
            for (var j = paths.css.length - 1; j >= 0; j--) {
                htmlPluginData.assets.css.unshift(paths.css[j]);
            };
            callback(null, htmlPluginData);
        });
    });
};

module.exports = htmlWebpackInsertPlugin;
