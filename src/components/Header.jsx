import { ShieldQuestionMark } from "lucide-react"
import Logo from "../../public/logo.png"

const Header = () => {
  return (
    <nav className="w-full h-1/12 border-b px-10 flex items-center gap-x-4">
      <ShieldQuestionMark
        size={25}
        className="text-red-500"
      />
      <h1 className="font-bold text-2xl  bg-gradient-to-r from-red-800 via-destructive to-destructive bg-clip-text text-transparent">
        Fake News Detector
      </h1>
    </nav>
  )
}

export default Header
