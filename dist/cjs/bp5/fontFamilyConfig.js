'use strict';

var parseNested = require('../utils/parseNested.js');

var fontFamilyConfig = {
    fontFamily: parseNested.parseNested({
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
