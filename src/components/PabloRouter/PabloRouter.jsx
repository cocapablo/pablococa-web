import React, { lazy, Suspense } from 'react'

//import HomePage from './pages/HomePage.jsx'
import Router from './Router.jsx'
//import Page404 from './pages/Page404.jsx';
//import SearchPage from './pages/SearchPage.jsx';
import Route from './Route.jsx';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const Page404 = lazy(() => import('./pages/Page404.jsx'));
const SearchPage = lazy(() => import('./pages/SearchPage.jsx'));


const appRoutes = [
    {
      path: "/:lang/about",
      Component: AboutPage
    },
    {
      path: "/search/:query",
      Component: SearchPage
    }
]

function PabloRouter() {
    
  return (
    <Suspense fallback={<h1>Cargando...</h1>}>
      <Router routes={appRoutes} defaultComponent={Page404}>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} /> 
      </Router>
    </Suspense>
    
  )
}

export default PabloRouter