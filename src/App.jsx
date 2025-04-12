import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login.jsx'
import Protected from './Protected'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <Protected
              allowedRoles={[
                'admin',
                'advertising_agency',
                'advertiser',
                'publisher',
                'channel',
              ]}
            >
              <Home />
            </Protected>
          }
        >
          {/* <Route
            path="/revenue"
            element={
              <Protected allowedRoles={['admin']}>
                <Revenue />
              </Protected>
            }
          /> */}

          {/* Other routes */}
        </Route>
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />

        {/* Login and NotFound routes */}
      </Routes>
    </>
  )
}

export default App
