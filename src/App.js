import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Spinner from './Components/Spinner'

const ForYou = lazy(() => import('./Pages/ForYou'))
const Homes= lazy(() => import('./Pages/Homes'))
const Experiences = lazy(() => import('./Pages/Experiences'))
const Places = lazy(() => import('./Pages/Places'))

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="fyp" element={<ForYou />} />
          <Route path="homes" element={<Homes />} />
          <Route path="places" element={<Places />} />
          <Route path="xps" element={<Experiences />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
