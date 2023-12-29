'use strict';

var elementIsEntry = function (element) { return typeof element[0] === "string"; };
var flattenToEntries = function (array) {
    var result = [];
    array.forEach(function (element) {
        if (elementIsEntry(element)) {
            result.push(element);
        }
        else {
            var typeFix = element;
            result.push.apply(result, flattenToEntries(typeFix));
        }
    });
    return result;
};
var valueIsStringAndMaybeList = function (value) { return typeof value === "string" || Array.isArray(value); };
var arrayifyConfig = function (object, parentName) {
    if (parentName === void 0) { parentName = ""; }
    return Object.entries(object).map(function (_a) {
        var key = _a[0], value = _a[1];
        var newKey = (function () {
            if (parentName === "") {
                return key;
            }
            if (key === "DEFAULT") {
                return parentName;
            }
            return "".concat(parentName, "-").concat(key);
        })();
        if (valueIsStringAndMaybeList(value)) {
            return [newKey, value];
        }
        var typeFix = value;
        return arrayifyConfig(typeFix, newKey);
    });
};
var parseNested = function (object) { return Object.fromEntries(flattenToEntries(arrayifyConfig(object))); };

exports.parseNested = parseNested;
