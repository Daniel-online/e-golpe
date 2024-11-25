import logo from "./../../../assets/CATCHDOG-indigo.png"
const Logo = () => {
  return (
    <div className="flex flex-row space-x-2 space-y-2  decoration-wavy ml-6 text-3xl  text-white bg-clip-content font-bold">

     <img alt="CATCHDOG logo" src={logo} className="w-12 h-12 rounded-lg w-full">
     </img>

     CATCHDOG 
     <span className="text-xs text-orange-400">
      BETA
     </span>
    </div>
  )
}

export default Logo
