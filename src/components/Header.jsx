import Logo from "../../public/logo.png"

const Header = () => {
  return (
    <div className="flex justify-left pl-5 bg-zinc-900">
      <img src={Logo} alt="Logo" className="xl:w-1/11  md:w-2/11"/>
    </div>
  )
}

export default Header
