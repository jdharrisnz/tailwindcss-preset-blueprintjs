'use strict';

var unnest = require('../utils/unnest.js');

var fontFamilyConfig = {
    fontFamily: unnest.unnest({
        bp5: {
            sans: [
                "-apple-system",
                "BlinkMacSystemFont",
                "Segoe UI",
                "Roboto",
                "Oxygen",
                "Ubuntu",
                "Cantarell",
                "Open Sans",
                "Helvetica Neue",
                "blueprint-icons-16",
                "sans-serif"
            ],
            mono: ["monospace"]
        }
    })
};

exports.fontFamilyConfig = fontFamilyConfig;
