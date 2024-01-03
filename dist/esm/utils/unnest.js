const unnest = (obj, parentKey = "") => {
    const result = {};
    Object.keys(obj).forEach((key) => {
        const value = obj[key];
        const fullKey = (() => {
            if (parentKey === "") {
                return String(key);
            }
            if (key === "DEFAULT") {
                return parentKey;
            }
            return `${parentKey}-${String(key)}`;
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

export { unnest };
