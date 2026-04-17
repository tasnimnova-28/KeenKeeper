import logo from '../assets/logo-xl.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#244d3f' }}>

      <div className="flex flex-col items-center text-center px-6 py-12">

        <img src={logo} alt="KeenKeeper" className="h-10 w-auto mb-4" />

        <p className="text-sm text-green-100 mb-6" style={{ maxWidth: '520px' }}>
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <p className="text-sm font-semibold mb-3">Social Links</p>

        <div className="flex items-center gap-3">
          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
            <img src={instagram} alt="Instagram" className="w-5 h-5 object-contain" />
          </a>
          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
            <img src={facebook} alt="Facebook" className="w-5 h-5 object-contain" />
          </a>
          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
            <img src={twitter} alt="Twitter" className="w-5 h-5 object-contain" />
          </a>
        </div>

      </div>

      <div className="px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-green-200" style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
        <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>

    </footer>
  )
}