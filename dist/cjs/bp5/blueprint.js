'use strict';

var tslib_es6 = require('../node_modules/tslib/tslib.es6.js');
var colorsConfig = require('./colorsConfig.js');
var shadowsConfig = require('./shadowsConfig.js');
var fontFamilyConfig = require('./fontFamilyConfig.js');
var transitionTimingConfig = require('./transitionTimingConfig.js');

var blueprint = {
    content: [],
    theme: {
        extend: tslib_es6.__assign(tslib_es6.__assign(tslib_es6.__assign(tslib_es6.__assign({}, colorsConfig.colorsConfig), shadowsConfig.shadowsConfig), fontFamilyConfig.fontFamilyConfig), transitionTimingConfig.transitionTimingConfig)
    }
};

exports.blueprint = blueprint;
