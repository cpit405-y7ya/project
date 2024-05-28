import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import EventsContextProvider from "./context/context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./Login";
import AuthProvider from "./context/AuthContext";
import { PrivateRoute } from "./PrivateRoute";
import { Signout } from "./Signout";

const router = createBrowserRouter([
  {
    path:'',
    element:<PrivateRoute><App/></PrivateRoute>
  },
  {
    path:'login',
    element:<Login/>
  },
  {
    path:'signout',
    element:<Signout/>
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <EventsContextProvider>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </EventsContextProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
