/**
 * Get a deeply nested value based on a given path string
 *
 * @param object
 * @param path
 * @returns {T}
 */
export function getValueByPath(object, path) {
    return path.split('.').reduce((acc, key) => {
        acc = acc[key];

        return acc;
    }, object);
}
