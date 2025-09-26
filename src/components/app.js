import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import appStore from "../utils/redux/appStore";
import HeaderComponent from "./HeaderComponent";
import BodyComponent from "./BodyComponent";
// import AboutComponent from "./AboutComponent";
import ContactComponent from "./ContactComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import ErrorComponent from "./ErrorComponent";
import RestarantInfoComponent from "./RestaurantInfoComponent";
import CartComponent from "./CartComponent";

// const div = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ]),
// ]);
// const title = 'hello there'
// const jsxHeading = (
//   <div id="parent" className="parent" tabIndex="2">
//     <div id="child">
//       <h1>I am h1 tag</h1>
//       <h2>I am h2 tag</h2>
//     </div>
//     <div id="chil2">
//       <h1>I am h1 tag</h1>
//       <h2>I am h2 tag</h2>
//     </div>
//   </div>
// );

// const FunctionComp = () => <h1>hello</h1>;
// const Newcomp = () => {
//   return (
//     <div>
//       <h2>test</h2>
//       {title}
//       {FunctionComp()}
//       <FunctionComp />
//       <FunctionComp></FunctionComp>
//       <h2>test</h2>
//     </div>
//   );
// };

// const reactEl = (
//     <div>
//         {Newcomp()}
//     </div>
// )

// const header = React.createElement(
//   "h1",
//   { id: "header", hello: "hello", className: "new test testing" },
//   "hello from react"
// );

const AboutComponent = lazy(() => import("./AboutComponent"));

const AppLayoutComponent = () => {
  return (
    <Provider store={appStore}>
      <div>
        <HeaderComponent />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoutComponent />,
    errorElement: <ErrorComponent />,
    children: [
      { path: "/", element: <BodyComponent /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <AboutComponent />
          </Suspense>
        ),
      },
      { path: "/contact", element: <ContactComponent /> },
      { path: "/restaurant/:resId", element: <RestarantInfoComponent /> },
      {path: '/cart',element: <CartComponent/>}
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Newcomp />);
root.render(<RouterProvider router={appRouter} />);
