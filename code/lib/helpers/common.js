export const cleanID = id => {
    id = id.replace(/\W/g, '');
    id = id.toLowerCase();
    return id;
};