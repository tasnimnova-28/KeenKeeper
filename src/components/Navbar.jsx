import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Clock, BarChart2, Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors
    ${isActive ? 'bg-[#2d6a5f] text-white' : 'text-gray-600 hover:bg-gray-100'}`

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <img src={logo} alt="KeenKeeper" className="h-8 w-auto" />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          <NavLink to="/" end className={linkClass}>
            <Home size={16} /> Home
          </NavLink>
          <NavLink to="/timeline" className={linkClass}>
            <Clock size={16} /> Timeline
          </NavLink>
          <NavLink to="/analytics" className={linkClass}>
            <BarChart2 size={16} /> Stats
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-1 mt-3 pb-2">
          <NavLink to="/" end className={linkClass} onClick={() => setMenuOpen(false)}>
            <Home size={16} /> Home
          </NavLink>
          <NavLink to="/timeline" className={linkClass} onClick={() => setMenuOpen(false)}>
            <Clock size={16} /> Timeline
          </NavLink>
          <NavLink to="/analytics" className={linkClass} onClick={() => setMenuOpen(false)}>
            <BarChart2 size={16} /> Stats
          </NavLink>
        </div>
      )}
    </nav>
  )
}