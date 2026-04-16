import { NavLink } from 'react-router-dom'
import { Home, Clock, BarChart2 } from 'lucide-react'
import logo from '../assets/logo.png'  

export default function Navbar() {
  return (
    <nav className="bg-white border border-gray-200 px-6 py-3 flex items-center justify-between">
      
      {/* Logo */}
      <img src={logo} alt="KeenKeeper" className="h-8 w-auto" />

      {/* Nav Links */}
      <div className="flex items-center gap-2">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors
            ${isActive ? 'bg-[#2d6a5f] text-white' : 'text-gray-600 hover:bg-gray-100'}`
          }
        >
          <Home size={16} />
          Home
        </NavLink>

        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors
            ${isActive ? 'bg-[#2d6a5f] text-white' : 'text-gray-600 hover:bg-gray-100'}`
          }
        >
          <Clock size={16} />
          Timeline
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors
            ${isActive ? 'bg-[#2d6a5f] text-white' : 'text-gray-600 hover:bg-gray-100'}`
          }
        >
          <BarChart2 size={16} />
          Stats
        </NavLink>
      </div>

    </nav>
  )
}