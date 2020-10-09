const { prepareGenericPayload } = require("./helpers");

const sourceData1 = {
    a1:11,
    b1:11
};

const sourceData2 = {
    a2:12,
    b2:12
};

console.log(`Target Data: ${JSON.stringify(prepareGenericPayload(sourceData1, "type1"))}`);

console.log(`Target Data: ${JSON.stringify(prepareGenericPayload(sourceData2, "type2"))}`);
