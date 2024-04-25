import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Home } from './Pages/Home';

export const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes >
    </>
  )
}

export default App
