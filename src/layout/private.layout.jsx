import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import HeaderLayout from "./header.layout";
import FooterLayout from "./footer.layout";
import CacheService from "services/cache.service";

const cacheService = new CacheService();

const PrivateLayout = (props) => {
  const { allowedRoles, children, title = "Ticket Booking" } = props;
  const currentUser = cacheService.getCurrentUser();
  const isAllow = cacheService.isCacheCurrentUserRolesExists(allowedRoles);

  useEffect(() => {
    document.title = title;
  }, [title]);


  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (!isAllow) {
    return (
      <div>
        <HeaderLayout />
        <div>
          Bạn không có quyền truy cập vào trang này, vui lòng liên hệ quản trị
          viên
        </div>
        <FooterLayout />
      </div>
    );
  }

  return (
    <div>
      <HeaderLayout />
      <main>{children}</main>
      <FooterLayout />
    </div>
  );
};

export default PrivateLayout;
