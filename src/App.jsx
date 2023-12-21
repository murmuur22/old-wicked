import React from 'react';
import VerifyingClient from './components/VerifyingClient.jsx';
import { createHashRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom';
const LazySignin = React.lazy(() => import('./components/Signin'));
const LazyImaging = React.lazy(() => import('./components/Imaging'));
const LazyAlbums = React.lazy(() => import('./components/projects/albumscovers/Albums'))
const LazyAmIAlive = React.lazy(() => import('./components/projects/amialive/AmIAlive'))
const LazyStickers = React.lazy(() => import('./components/projects/stickers/Stickers'))


import './styles/app.css';


function App() {
  const router = createHashRouter(
      createRoutesFromElements(
        <Route path='/' element={<Root />}>  
          <Route index element={
              <LazySignin />
          }/>

          <Route path='/imaging' element={
            <React.Suspense fallback={<VerifyingClient />}>
              <LazyImaging />
            </React.Suspense>
          } />

          <Route path='/projects/album-covers' element={
            <React.Suspense fallback={<></>}>
              <LazyAlbums/>
            </React.Suspense>
          } />

          <Route path='/projects/am-i-alive' element={
            <React.Suspense fallback={<></>}>
              <LazyAmIAlive/>
            </React.Suspense>
          } />

          <Route path='/projects/stickers' element={
            <React.Suspense fallback={<></>}>
              <LazyStickers/>
            </React.Suspense>
          } />

        </Route>
    )
  );


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

function Root() {
  return (
    <>
      <Outlet />
    </>
  )
}

export default App
