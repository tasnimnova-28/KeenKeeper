import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import FriendDetails from './pages/FriendDetails'
import Timeline from './pages/Timeline'
import Analytics from './pages/Analytics'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friend/:id" element={<FriendDetails />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App