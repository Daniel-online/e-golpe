import { useState } from "react"
// import CustomFileInput from "./../Forms/CustomFileInput.jsx"
import { MdClose } from "react-icons/md";
import "./Modal.css"
import AlertButton from "../Feed/AlertButton";
const Alert = () => {

  const [modal, setmodal] = useState(false);
  const popUp = () => {
    setmodal(!modal);
  }
  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  return (
    <>
      <button onClick={popUp} className="btn-modal">
        <AlertButton/>
      </button>

      {modal && (
        <div className="modal">
          <div onClick={popUp} className="overlay"></div>
          <div className="modal-content h-36 flex place-content-evenly">
            <form action="">

              <select name="report" id="report">
                <option value="Violência ou Abuso">Violência ou Abuso</option>
                <option value="Spam, Golpe ou Falsificação">Spam, Golpe ou Falsificação</option>
                <option value="Discurso ofensivo ou Assédio Moral">Discurso ofensivo ou Assédio Moral</option>
                <option value="Maltratos a animais">Maltratos a animais</option>
              </select>

              <input type="submit" value="Enviar"></input>
            </form>

            <button className="close-modal" onClick={popUp}>
              <MdClose/>
            </button>

          </div>
        </div>
      )}
    </>
    /* {modal && (<div className="pop place-content-center justify-between h-64 shadow-lg w-64 bg-yellow-300 border-s border-slate-300 rounded-lg items-center " >

      <div className="overlay w-full h-full "></div>
      <div className="modal-content">
        <h2>dddddd</h2>
        Lorem ipsum dolor sit amet con
      </div>

      <div className="choice">

        <form action="">

          <select name="report" id="report">
            <option value="Violência ou Abuso">Violência ou Abuso</option>
            <option value="Spam, Golpe ou Falsificação">Spam, Golpe ou Falsificação</option>
            <option value="Discurso ofensivo ou Assédio Moral">Discurso ofensivo ou Assédio Moral</option>
            <option value="Maltratos a animais">Maltratos a animais</option>
          </select>

          <input type="submit" value="Enviar"></input>
        </form>

        <button onClick={popUp}>
          <MdClose />
        </button> */

  )
}

export default Alert
