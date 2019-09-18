export const selectWord = (state, word) => {
    const { data } = state.words;
    if (!data) {
        return;
    }
    return data[word];
};