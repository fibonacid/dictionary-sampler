export const cleanID = id => {
    if (typeof id === "string") {
        id = id.replace(/\W/g, '');
        id = id.toLowerCase();
        return id;
    }
};

export function clamp(val, min, max) {
    return val > max ? max : val < min ? min : val;
}