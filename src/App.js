import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/section/Header'
import Main from './components/section/Main'
import Footer from './components/section/Footer'
import Today from './pages/Today'
import Channel from './pages/Channel'
import Youtuber from './pages/Youtuber'
import Search from './pages/Search'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/Youtuber" element={<Youtuber />} />
          <Route path="/channel/:channelId" element={<Channel />} />
          <Route path="/search/:searchId" element={<Search />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
