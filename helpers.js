const { genericPayloadMap } = require("./constant");

const getKeys = object => {
    try {
        return Object.keys(object)
    } catch (error) {
        return [];
    }
};

const prepareGenericPayload = (data, selector) => {
    try {
        return getKeys(genericPayloadMap[selector]).reduce((result, key) => {
            result[key] = data[genericPayloadMap[selector][key]];
            return result;
        }, {});
    } catch (error) {
        return {};
    }
}

module.exports = {
    prepareGenericPayload
};
