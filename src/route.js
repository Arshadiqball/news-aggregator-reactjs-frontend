// Route.js

import React, { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Footer from "./views/Home/Footer"
import Header from "./views/Home/Header"
import Sections from "./views/Home/Sections"
import CategoryNews from "./views/CategoryNews/CategoryNews"
import Search from "./views/Search/Search"
import Profile from "./views/Profile/Profile"
import Login from "./views/Login/Login"
import Register from "./views/Register/Register"
import { isAuthenticated } from './assets/utils/helper'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { v4 as uuidv4 } from "uuid"
import { router } from "./config/config"
import { UserProvider } from './context/UserContext'

function RouteComponent() {
  return (
    <UserProvider>
      <Router>
        {isAuthenticated() && <Header />}
        <Suspense fallback={<div>Page is Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated() ? (
                  <Sections />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/search/:query"
              element={
                isAuthenticated() ? (
                  <Search />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/profile"
              element={
                isAuthenticated() ? (
                  <Profile />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/login"
              element={
                isAuthenticated() ? (
                  <Navigate to="/" />
                ) : (
                  <Login />
                )
              }
            />
            <Route
              path="/register"
              element={
                isAuthenticated() ? (
                  <Navigate to="/" />
                ) : (
                  <Register />
                )
              }
            />
            <Route
              path="*"
              element={<Navigate to="/login" />}
            />
            {router.map((path) => (
              <Route
                exact
                key={uuidv4()}
                path={path.path}
                element={
                  isAuthenticated() ? (
                    <Navigate to="/" />
                  ) : (
                    
                  <CategoryNews
                  key={path.key}
                  newscategory={path.category}
                  country={path.country}
                />
                  )
                }
              />
            ))}
          </Routes>
        </Suspense>
        {isAuthenticated() && <Footer />}
        <ToastContainer />
      </Router>
    </UserProvider>
  )
}

export default RouteComponent
