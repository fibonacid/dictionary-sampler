//creates a `search` function, which accepts a needle (property name, string),
//a haystack (the object to search within), found (the recursively added to
//list of found properties
const searchKey = (needle, haystack, found = []) => {
    //iterate through each property key in the object
    Object.keys(haystack).forEach((key) => {
        //if the current key is the search term (needle),
        //push its value to the found stack
        if(key === needle){
            found.push(haystack[key]);
            //return the array of found values to the caller, which is
            //either the caller of the search function, or the recursive
            //"parent" of the current search function
            return found;
        }
        //if the value of the current property key is an object,
        //recursively search it for more matching properties

        //this can be changed to an else if, if properties should not
        //be nested
        if(typeof haystack[key] === 'object'){
            searchKey(needle, haystack[key], found);
        }
    });
    //return the list of found values to the caller of the function
    return found;
};

module.exports = searchKey;