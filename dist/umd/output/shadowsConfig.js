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
    exports.shadowsConfig = void 0;
    exports.shadowsConfig = {
        "boxShadow": {
            "bp5-elevation-0": "0 0 0 1px rgba(17, 20, 24, 0.15)",
            "bp5-elevation-0-dark": "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
            "bp5-elevation-1": "0 0 0 1px rgba(17, 20, 24, 0.1), 0 1px 1px rgba(17, 20, 24, 0.2)",
            "bp5-elevation-1-dark": "inset 0 0 0 1px rgba(255, 255, 255, 0.2), 0 1px 1px 0 rgba(17, 20, 24, 0.4)",
            "bp5-elevation-2": "0 0 0 1px rgba(17, 20, 24, 0.1), 0 1px 1px rgba(17, 20, 24, 0.2), 0 2px 6px rgba(17, 20, 24, 0.2)",
            "bp5-elevation-2-dark": "inset 0 0 0 1px rgba(255, 255, 255, 0.2), 0 1px 1px rgba(17, 20, 24, 0.4), 0 2px 6px rgba(17, 20, 24, 0.4)",
            "bp5-elevation-3": "0 0 0 1px rgba(17, 20, 24, 0.1), 0 2px 4px rgba(17, 20, 24, 0.2), 0 8px 24px rgba(17, 20, 24, 0.2)",
            "bp5-elevation-3-dark": "inset 0 0 0 1px rgba(255, 255, 255, 0.2), 0 2px 4px rgba(17, 20, 24, 0.4), 0 8px 24px rgba(17, 20, 24, 0.4)",
            "bp5-elevation-4": "0 0 0 1px rgba(17, 20, 24, 0.1), 0 4px 8px rgba(17, 20, 24, 0.2), 0 18px 46px 6px rgba(17, 20, 24, 0.2)",
            "bp5-elevation-4-dark": "inset 0 0 0 1px rgba(255, 255, 255, 0.2), 0 4px 8px rgba(17, 20, 24, 0.4), 0 18px 46px 6px rgba(17, 20, 24, 0.4)",
            "bp5-input": "inset 0 0 0 1px rgba(17, 20, 24, 0.2), inset 0 1px 1px rgba(17, 20, 24, 0.3)",
            "bp5-input-dark": "inset 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 -1px 1px 0 rgba(255, 255, 255, 0.3)",
            "bp5-dialog": "0 0 0 1px rgba(17, 20, 24, 0.1), 0 2px 4px rgba(17, 20, 24, 0.2), 0 8px 24px rgba(17, 20, 24, 0.2)",
            "bp5-dialog-dark": "inset 0 0 0 1px rgba(255, 255, 255, 0.2), 0 2px 4px rgba(17, 20, 24, 0.4), 0 8px 24px rgba(17, 20, 24, 0.4)",
            "bp5-popover": "0 0 0 1px rgba(17, 20, 24, 0.1), 0 2px 4px rgba(17, 20, 24, 0.2), 0 8px 24px rgba(17, 20, 24, 0.2)",
            "bp5-popover-dark": "0 0 0 1px hsl(215, 3%, 38%), inset 0 0 0 1px rgba(255, 255, 255, 0.2), 0 2px 4px rgba(17, 20, 24, 0.4), 0 8px 24px rgba(17, 20, 24, 0.4)",
            "bp5-tooltip": "0 0 0 1px rgba(17, 20, 24, 0.1), 0 2px 4px rgba(17, 20, 24, 0.2), 0 8px 24px rgba(17, 20, 24, 0.2)",
            "bp5-tooltip-dark": "0 2px 4px rgba(17, 20, 24, 0.4), 0 8px 24px rgba(17, 20, 24, 0.4)",
            "bp5-toast": "inset 0 0 0 1px rgba(17, 20, 24, 0.2), 0 2px 4px rgba(17, 20, 24, 0.2), 0 8px 24px rgba(17, 20, 24, 0.2)",
            "bp5-toast-dark": "inset 0 0 0 1px rgba(255, 255, 255, 0.2), 0 2px 4px rgba(17, 20, 24, 0.2 * 2), 0 8px 24px rgba(17, 20, 24, 0.2 * 2)"
        }
    };
});
//# sourceMappingURL=shadowsConfig.js.map