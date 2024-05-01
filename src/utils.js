export const hasAllKeys = (obj) => {
    for (let key of Object.keys(obj)) {
        if (!(key in obj)) {
            return false;
        }
    }
    return true;
}