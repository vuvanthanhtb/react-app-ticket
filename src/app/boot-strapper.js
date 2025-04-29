import CacheService from "../services/cache.service";

const cacheService = new CacheService();

class BootStrapper {
  static async initialize() {
    console.log("BootStrapper initialized with app:");
  }

  static async setDataToRunApplicationInLocal() {
    console.log("Setting data to run application in local");
    cacheService.setCurrentUserRoles(["admin", "user"]);
    cacheService.setCurrentUser({
      username: "XXXXX",
      password: "XXXXX",
    });
  }
}

export default BootStrapper;
