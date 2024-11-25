import profilePic from "./../../../assets/profilePic.jpeg"
import { MdOutlineMoreVert } from "react-icons/md";
import postPic from "./../../../assets/engracado_demais.png"
import AlertButton from "./AlertButton"
import { LuSiren } from "react-icons/lu";
import { FaPersonFallingBurst } from "react-icons/fa6";

const timePassed = 20;
const userName = "Daniel-is-online";

const Posts = () => {
  return (
    <div className="feed flex flex-col">


      <div className="place-content-evenly  h-max-[100px] shadow-lg w-full bg-white border-s border-slate-300 rounded-lg items-center mt-[30px] mb-[30px] ">
        <div className="buttons flex flex-row justify-between flex  p-[10px]">
          <div className="flex items-center space-x-4 justify-between">
            <div className=" posterPic w-12 h-12 border-1 border-transparent">
              <img src={profilePic} alt="post image" className=" py-2 px-2 w-12 h-12 rounded-full object-cover" />
            </div>
            <span className="text-md font-medium">
              {userName}
            </span>
            <span className="text-xs font-light ">
              {timePassed} minutos
            </span>
          </div>
          <div className="smallerButtons pr-2 py-2 py-px flex items-center">
             <button className=""><MdOutlineMoreVert className="text-xl cursor-pointer" /></button> 
            </div>
        </div>

        <div className="card font-bold items-center w-full">
          <span className=" mt-[20px] mb-[20px]  border-4 border-transparent border-spacing-2 border-spacing-x-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam explicabo culpa eius vero pariatur voluptatem nemo iure provident fugiat expedita architecto sint, nisi praesentium eaque id commodi maxime debitis non.

          </span>
          <img src={postPic} alt="place-content-center Post image" className=" rounded-lg h-64 w-full object-contain hover:h-max-[500]"></img>

        </div>
        <div className="interaction">
          <div className="buttons flex flex-row justify-between">
            <ul className="flex space-x-2 border-1 border-transparent py-2 px-2">
              <li>
                <button className="ring-1 ring-cyan-600 flex items-center justify-center py-2 px-2 h-10 w-30 rounded-lg text-cyan-600">
                  <LuSiren />
                  <span>Importante</span>
                </button>
              </li>
              <li> <button className="flex flex-row ring-1 ring-cyan-600 flex items-center justify-center py-2 px-2 h-10 w-30 rounded-lg text-cyan-600">
                <FaPersonFallingBurst className="text-xl" />
                <span >Caí Nessa </span>
              </button>
              </li>
            </ul>
            <div className="smallerButtons pr-2 py-2 py-px flex items-center">
              <AlertButton />
            </div>
          </div>
          <div className="count"></div>
        </div>
        <div className="comments space-y-2">
          comments will be displayed here
        </div>

      </div>


    </div>

  )
}

export default Posts
