import { RiNumbersFill } from "react-icons/ri";
// import { TbCategory } from "react-icons/tb";
import { LuTags } from "react-icons/lu";
import { IoSchoolSharp } from "react-icons/io5";
import  SearchBar from "./../Navigation/SearchBar"

const Sidebar = () => {
  return (
    <div className=" text-white h-screen w-1/5 py-px space-y-12">

      <div className="searchBar">
        <SearchBar />
      </div>

      <div className="shadow-lg bg-indigo-600 rounded-lg border-transparent border-8 text-xl">
        <ul className="flex-column items-center ">
          
          <li className="flex items-center gap-2 py-3">
            <a href="" className="flex gap-2 hover:text-orange-400">
              <RiNumbersFill />
              <span> Recem Adicionados</span>
            </a>
          </li>
          <li className="flex gap-2 items-center py-3">
            <a href="" className="flex gap-2 hover:text-orange-400">
              <LuTags />
              <span>Mapa</span>
            </a>
          </li>
          <li className="flex gap-2 items-center py-3">
            <a href="" className="flex gap-2 hover:text-orange-400">
              <IoSchoolSharp />
              <span>Tutorial</span>
            </a>
          </li>

        </ul>
      </div>

      <div className="shadow-lg bg-indigo-600 rounded-lg place-content-baseline border-transparent border-8 ">
        
        <ul>

          <li className=" hover:text-orange-400">
            <a href="">Sobre nós</a>
          </li>
          <li className=" hover:text-orange-400">
            <a href="">Fale Conosco</a>
          </li>

        </ul>
        
      </div>
    </div>
  )
}

export default Sidebar
