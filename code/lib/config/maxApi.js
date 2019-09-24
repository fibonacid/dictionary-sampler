export const maxApi = __non_webpack_require__("max-api");

export function maxMessageOut(message) {
    return maxApi.outlet(message);
}

export function maxSetDictionary(dictName, data) {
    return maxApi.setDict(dictName, data);
}

export function maxConsoleOut(message) {
    return maxApi.post(message);
}

export function maxPolyTildeMessage(voiceNumber, message) {
    return maxApi.outlet(`target ${voiceNumber}, ${message}`);
}

export function maxSendRefresh() {
    return maxApi.outlet("refresh")
}