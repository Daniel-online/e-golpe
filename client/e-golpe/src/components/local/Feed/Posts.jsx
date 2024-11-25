import { MdOutlineMoreVert } from "react-icons/md";
import AlertButton from "./AlertButton"
import { LuDog } from "react-icons/lu";
import { TbBone } from "react-icons/tb";import { useState } from "react";
import PropTypes from 'prop-types';
import {Users} from "../../../Data/Data.js"


const Posts = ({ post }) => {
  let [upVote, setUpvote] = useState(post.upVote)
  let [isVoted, setIsVoted] = useState(false)
  const user = Users.find((user) => user.id === post?.userId);
  const handleUpvote = ()=>{

        if(isVoted==true){
            setUpvote(upVote = upVote +1)
        }else{
          setIsVoted(!isVoted)
        }
      
      
  }
  return (
    <div className="feed flex flex-col">


      <div className="place-content-evenly  h-max-[100px] shadow-lg w-full bg-white border-s border-slate-300 rounded-lg items-center mt-[30px] mb-[30px] ">
        <div className="buttons flex flex-row justify-between flex  p-[10px]">
          <div className="flex items-center space-x-4 justify-between">
            <div className=" posterPic w-12 h-12 border-1 border-transparent">
              <img src={Users.profilePicture} alt="post image" className=" py-2 px-2 w-12 h-12 rounded-full object-cover" />
            </div>
            <span className="text-md font-medium">
            {user ? user.username : "Unknown User"}
            </span>
            <span className="text-xs font-light ">
              {post.date} 
            </span>
          </div>
          <div className="smallerButtons pr-2 py-2 py-px flex items-center">
            <button className=""><MdOutlineMoreVert className="text-xl cursor-pointer" /></button>
          </div>
        </div>

        <div className="card font-bold items-center w-full">
          <span className=" grid px-2 py-2 border-1 border-transparent border-spacing-2 border-spacing-x-2">
            {post.desc}
          </span>
          <img src={user.profilePicture} alt="place-content-center Post image" className=" rounded-lg h-64 w-full object-contain hover:h-max-[500]"></img>

        </div>
        <div className="interaction">
          <div className="buttons flex flex-row justify-between">
            <ul className="flex space-x-2 border-1 border-transparent py-2 px-2">
              <li>
                <button className="ring-1 ring-indigo-600 flex items-center justify-center py-2 px-2 h-10 w-30 rounded-lg text-indigo-600 hover:text-white hover:bg-indigo-600" 
                onClick={handleUpvote}>
                  <span className="text-xs">{upVote}</span>
                  <LuDog className="text-xl" />
                  <span>Amei</span>
                </button>
              </li>
              <li> <button className="flex flex-row ring-1 ring-indigo-600 flex items-center justify-center py-2 px-2 h-10 w-30 rounded-lg text-indigo-600 hover:text-white hover:bg-indigo-600">
                <TbBone className="text-xl" />
                <span >Quero Ajudar</span>
              </button>
              </li>
            </ul>
            <div className="smallerButtons pr-2 py-2 py-px flex items-center">
              <AlertButton />
            </div>
          </div>
          <div className="count">
           {post.upVote}
          </div>
        </div>
        {/* <div className="comments space-y-2">
        {post.comments}
        </div> */}

      </div>


    </div>

  )
}
Posts.propTypes = {
  post: PropTypes.object
}
export default Posts
