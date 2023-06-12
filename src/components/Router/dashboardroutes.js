import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import DashboardLayout from "../../Dashboard/DashboardLayout";

const PrivateRouter = () => {
  const value = localStorage.getItem('TOKEN')
  return (
    <>
    {value ?
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>:
     <Navigate to="/"/>
}
    </>
  );
};

export default PrivateRouter;
