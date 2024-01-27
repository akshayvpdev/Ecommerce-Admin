import { Route, Routes } from "react-router-dom";
import { basePath, cartPath, dashboardPath, loginPath, ordersPath, productDetailsPath, productsPath } from "./Utils/Constants";
import LoginPage from "./Pages/Common/Login/LoginPage";
import { PrivateRoute } from "./Utils/PrivateRoute";
import AdminConnection from "./Connection/AdminConnection";
import DashboardPage from "./Pages/Private/Dashboard/DashboardPage";
import OrderPage from "./Pages/Private/Order/OrderPage";
import Product from "./Pages/Private/Product/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path={loginPath} element={<LoginPage />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}

        <Route path={basePath} element={<PrivateRoute><AdminConnection /></PrivateRoute>}>
        <Route path={dashboardPath} element={<DashboardPage />} />
        {/* <Route path={OrderPage} element={<ordersPath/>} /> */}
        <Route path={productsPath} element={<Product/>} />
        <Route path={productDetailsPath} element={<LoginPage />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
