const Constants = require("../lib/constants");

function redisKey(msisdn) {
    return Constants.REDIX_KEY_PREFIX + msisdn;
}

module.exports = redisKey;