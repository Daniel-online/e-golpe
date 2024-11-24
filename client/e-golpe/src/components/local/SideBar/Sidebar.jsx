import { RiNumbersFill } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
import { LuTags } from "react-icons/lu";
import { IoSchoolSharp } from "react-icons/io5";
const Sidebar = () => {
  return (
    <div className=" text-white h-screen w-1/5 py-px space-y-3">
      <div className="bg-cyan-600 rounded-lg border-transparent border-8 text-xl">
        <ul className="flex-column items-center ">
          <li className="flex items-center gap-2 py-3">
            <a href="" className="gap-2">
              <RiNumbersFill />
             <span> Top 10 da Semana</span>
            </a>
          </li>
          <li className="flex items-center py-3">
            <a href="">
              <TbCategory />Categorias
            </a>
          </li>
          <li className="flex items-center py-3">
            <a href="">
              <LuTags />Tags
            </a>
          </li>
          <li className="flex items-center py-3">
            <a href="">
              <IoSchoolSharp />Educação
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-cyan-600 rounded-lg place-content-baseline border-transparent border-8">
        <ul>
          <li>Sobre nós</li>
          <li>Fale Conosco</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
