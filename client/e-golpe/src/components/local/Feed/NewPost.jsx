import userPicture from "./../../../assets/profilePic.jpeg"
import { CiFileOn } from "react-icons/ci";
import { ImImage } from "react-icons/im";
import { GrLocation } from "react-icons/gr";
const NewPost = () => {
  // const fileIcon = CiFileOn;
  // const imageIcon = ImImage;
  const fraseTextBox = "Quem passou a perna em você hoje?";
  return (
    <div className="shadow-lg wrapper bg-white border-s border-slate-300 rounded-lg items-center">
      <form>
        <div className="px-2 top border-transparent border-x-4 border-y-4 flex items-center space-x-4 space-y-2">
          <div className="posterPic w-12 h-12 border-1 border-slate-300">
            <img src={userPicture} className="w-12 h-12 rounded-full"></img>
          </div>
          <div className=" py-px top textBox text-lg max-w-max border-1 border-transparent ">
            <textarea className="px-2 py-2 h-12 focus:h-32 w-max ring-1 ring-slate-300 rounded-lg  border-1 border-slate-100" placeholder= {fraseTextBox} name="message" id="textbox" rows="3" cols="40"></textarea>
          </div>
        </div>

        <div className=" px-6 py-4 border-4 border-transparent place-content-end text-white inputBar space-x-8 flex flex-row w-full py-px">
          <ul className="space-x-4 text-sm flex place-content-evenly">
            <button className="flex items-center justify-center py-px h-8 w-8 rounded-lg bg-cyan-600" type="file" id="post" name="post" accept="image/png, image/jpeg" >
              <ImImage></ImImage>
            </button>
            <button className="flex items-center justify-center py-px h-8 w-8 rounded-lg bg-cyan-600" type="file" id="post" name="post" accept="pdf" >
              <CiFileOn></CiFileOn>
            </button>
            <button className="flex items-center justify-center py-px h-8 w-8 rounded-lg bg-cyan-600" type="file" id="post" name="post" accept="pdf" >
              <GrLocation></GrLocation>
            </button>
            <input className="flex items-center justify-center py-px h-8 w-16 rounded-lg bg-cyan-600" type="submit" value="Enviar"></input>
          </ul>

        </div>
      </form>
    </div>
  )
}

export default NewPost;
