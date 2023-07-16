// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// function PrivateRoute({ element: Component, isAuthenticated, ...rest }) {
//     console.log("🚀 ~ file: PrivateRoute.js:5 ~ PrivateRoute ~ Component:", Component)
//     console.log("🚀 ~ file: PrivateRoute.js:5 ~ PrivateRoute ~ isAuthenticated:", isAuthenticated)
//     const token = localStorage.getItem("access_token");
//     console.log("🚀 ~ file: PrivateRoute.js:6 ~ PrivateRoute ~ token:", token)
    
//   return (
//     <Route
//       {...rest}
//       element={
//         isAuthenticated ? (
//           <Component />
//         ) : (
//           <Navigate to="/login" replace />
//         )
//       }
//     />
//   );
// }

// export default PrivateRoute;

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";

const isAuthenticated = localStorage.getItem("access_token");

const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated) {
          // not logged in so redirect to login page with the return url
          navigate("/");
          return null;
        }

        // authorised so return component
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

export default PrivateRoute;

