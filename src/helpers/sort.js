import { getValueByPath } from "@inkline/inkline/src/helpers/getValueByPath";

export function sortBy(path) {
    return (a, b) => {
        return (getValueByPath(a, path) > getValueByPath(b, path)) ?
            1 : (getValueByPath(a, path) < getValueByPath(b, path)) ? -1 : 0;
    };
}
