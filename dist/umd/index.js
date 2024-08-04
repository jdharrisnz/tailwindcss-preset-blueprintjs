(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./output/blueprint.js", "./output/blueprint.js", "./output/colorsConfig.js", "./output/fontFamilyConfig.js", "./output/shadowsConfig.js", "./output/transitionTimingConfig.js"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transitionTimingConfig = exports.shadowsConfig = exports.fontFamilyConfig = exports.colorsConfig = exports.blueprint = void 0;
    const blueprint_js_1 = require("./output/blueprint.js");
    exports.default = blueprint_js_1.blueprint;
    var blueprint_js_2 = require("./output/blueprint.js");
    Object.defineProperty(exports, "blueprint", { enumerable: true, get: function () { return blueprint_js_2.blueprint; } });
    var colorsConfig_js_1 = require("./output/colorsConfig.js");
    Object.defineProperty(exports, "colorsConfig", { enumerable: true, get: function () { return colorsConfig_js_1.colorsConfig; } });
    var fontFamilyConfig_js_1 = require("./output/fontFamilyConfig.js");
    Object.defineProperty(exports, "fontFamilyConfig", { enumerable: true, get: function () { return fontFamilyConfig_js_1.fontFamilyConfig; } });
    var shadowsConfig_js_1 = require("./output/shadowsConfig.js");
    Object.defineProperty(exports, "shadowsConfig", { enumerable: true, get: function () { return shadowsConfig_js_1.shadowsConfig; } });
    var transitionTimingConfig_js_1 = require("./output/transitionTimingConfig.js");
    Object.defineProperty(exports, "transitionTimingConfig", { enumerable: true, get: function () { return transitionTimingConfig_js_1.transitionTimingConfig; } });
});
//# sourceMappingURL=index.js.map