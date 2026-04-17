import logo from '../assets/logo-xl.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

export default function Footer() {
  return (
    <footer className="bg-[#2d6a5f] text-white">

      <div className="flex flex-col items-center text-center px-4 py-10">

        <img src={logo} alt="logo" className="h-10 mb-4" />

        <p className="text-sm text-green-100 max-w-lg mx-auto mb-6 text-center leading-relaxed">
  Your personal shelf of meaningful connections, Browse, trend and nurture the relationships that matter most.
</p>

        <div className="flex gap-4">
          <img src={instagram} alt="ig" className="w-6 h-6" />
          <img src={facebook} alt="fb" className="w-6 h-6" />
          <img src={twitter} alt="tw" className="w-6 h-6" />
        </div>

      </div>

    </footer>
  )
}