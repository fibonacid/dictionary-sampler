export const cleanID = id => {
    if (typeof id === "string") {
        id = id.replace(/\W/g, '');
        id = id.toLowerCase();
        return id;
    }
};