"use strict";

module.exports = (userService) => {
  return {
    async storeProfile(profileInfos) {
      try {
        const ret = await userService.storeProfiles(profileInfos);
        return ret;
        // return ret.map(async (r) => await userService.fetchById(r.msisdn))
      } catch (e) {
        throw e;
      }
    },
  };
};
