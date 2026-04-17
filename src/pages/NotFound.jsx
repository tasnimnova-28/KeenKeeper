import { useNavigate } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <h1 className="text-8xl font-bold text-[#2d6a5f] mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-500 text-sm max-w-sm mb-8">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 bg-[#2d6a5f] hover:bg-[#245a50] text-white text-sm font-medium px-6 py-3 rounded-md transition-colors"
      >
        <Home size={16} />
        Back to Home
      </button>
    </div>
  )
}