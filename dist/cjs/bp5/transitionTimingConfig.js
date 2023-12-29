'use strict';

var parseNested = require('../utils/parseNested.js');

var transitionTimingConfig = {
    transitionTimingFunction: parseNested.parseNested({
        bp5: {
            DEFAULT: "cubic-bezier(0.4, 1, 0.75, 0.9)",
            bounce: "cubic-bezier(0.54, 1.12, 0.38, 1.11)"
        }
    })
};

exports.transitionTimingConfig = transitionTimingConfig;
