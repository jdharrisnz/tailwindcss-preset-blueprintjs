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
    exports.transitionTimingConfig = void 0;
    exports.transitionTimingConfig = {
        "transitionTimingFunction": {
            "bp5": "cubic-bezier(0.4, 1, 0.75, 0.9)",
            "bp5-bounce": "cubic-bezier(0.54, 1.12, 0.38, 1.11)"
        }
    };
});
//# sourceMappingURL=transitionTimingConfig.js.map