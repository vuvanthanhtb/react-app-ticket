class CacheService {
  setCache(id, data) {
    localStorage.setItem(id, JSON.stringify(data));
  }

  getCache(id) {
    return JSON.parse(localStorage.getItem(id));
  }

  isCacheExists(id) {
    return localStorage.getItem(id) !== null;
  }

  clearCache(id) {
    localStorage.removeItem(id);
  }

  clearAllCache() {
    localStorage.clear();
  }

  getCurrentUser() {
    return this.getCache("CURRENT_USER");
  }

  getCurrentUserRoles() {
    return this.getCache("CURRENT_ROLES") || [];
  }

  setCurrentUser(data) {
    this.setCache("CURRENT_USER", data);
  }

  setCurrentUserRoles(data) {
    this.setCache("CURRENT_ROLES", data);
  }

  isCacheCurrentUserRolesExists(allowedRoles = []) {
    const roles = this.getCurrentUserRoles();

    roles.forEach((role) => {
      if (allowedRoles.includes(role)) {
        return true;
      }
    });
    return false;
  }
}

export default CacheService;
