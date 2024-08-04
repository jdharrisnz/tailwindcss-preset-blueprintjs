(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fontFamilyConfig = void 0;
    exports.fontFamilyConfig = {
        "fontFamily": {
            "bp5-sans": [
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
            "bp5-mono": [
                "monospace"
            ]
        }
    };
});
//# sourceMappingURL=fontFamilyConfig.js.map