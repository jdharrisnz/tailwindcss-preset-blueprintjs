const elementIsEntry = (element) => typeof element[0] === "string";
const flattenToEntries = (array) => {
    const result = [];
    array.forEach((element) => {
        if (elementIsEntry(element)) {
            result.push(element);
        }
        else {
            const typeFix = element;
            result.push(...flattenToEntries(typeFix));
        }
    });
    return result;
};
const valueIsStringAndMaybeList = (value) => typeof value === "string" || Array.isArray(value);
const arrayifyConfig = (object, parentName = "") => Object.entries(object).map(([key, value]) => {
    const newKey = (() => {
        if (parentName === "") {
            return key;
        }
        if (key === "DEFAULT") {
            return parentName;
        }
        return `${parentName}-${key}`;
    })();
    if (valueIsStringAndMaybeList(value)) {
        return [newKey, value];
    }
    const typeFix = value;
    return arrayifyConfig(typeFix, newKey);
});
const parseNested = (object) => Object.fromEntries(flattenToEntries(arrayifyConfig(object)));

export { parseNested };
