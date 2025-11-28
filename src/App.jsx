import './App.css'
import Navbar from './componant/Navbar/Navbar'
import Home from './Pages/Home/home'
import Footer from './componant/Footer/Footer'
import Aboutus from './Pages/Aboutus/Aboutus'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Ourteam from './Pages/Ourteam/Ourteam'
import Faqs from './Pages/Faqs/Faqs'
import Error from './Pages/Error/Error'

function App() {

  return (
    <>
      <BrowserRouter>
        < Navbar />
        
        <Routes>
          <Route path='/' element={<><Home /><Aboutus /><Ourteam /></>} />
          <Route path='/About-US' element={<Aboutus />} />
          <Route path='/Ourteam' element={<Ourteam />} />
          <Route path='/FaQs' element={<Faqs />} />
          <Route path='/Error' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>



    </>
  )
}

export default App







