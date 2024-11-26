import { useState } from "react";
import { MdClose } from "react-icons/md"
import MdOutlineMoreVert from "react-icons/md";
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
 PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,

  } from "react-share";


import "./Modal.css";

export default function ShareModal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
            <MdOutlineMoreVert className="text-xl cursor-pointer" />
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <div className="share-buttons flex">
                            <EmailShareButton/>
                            <FacebookShareButton/>
                            <LinkedinShareButton/>
                            <PocketShareButton/>
                            <RedditShareButton/>
                            <TelegramShareButton/>
                            <WhatsappShareButton/>
                            <TwitterShareButton/>
                        </div>
                        <button className="close-modal" onClick={toggleModal}>
                            <MdClose />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}