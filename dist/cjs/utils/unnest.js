'use strict';

var unnest = function (obj, parentKey) {
    if (parentKey === void 0) { parentKey = ""; }
    var result = {};
    Object.keys(obj).forEach(function (key) {
        var value = obj[key];
        var fullKey = (function () {
            if (parentKey === "") {
                return String(key);
            }
            if (key === "DEFAULT") {
                return parentKey;
            }
            return "".concat(parentKey, "-").concat(String(key));
        })();
        if (typeof value === "object" && !Array.isArray(value)) {
            Object.assign(result, unnest(value, fullKey));
        }
        else {
            result[fullKey] = value;
        }
    });
    return result;
};

exports.unnest = unnest;
