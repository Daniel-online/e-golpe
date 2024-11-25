import { IoAlertCircleOutline } from "react-icons/io5";

const AlertButton = () => {
    return (
        <div>
            <div className="alertButton">
                <button className="flex items-center justify-center py-px h-6 w-6 rounded-full bg-red-600 ">
                    <IoAlertCircleOutline className="text-bold text-white h-full w-full"></IoAlertCircleOutline>
                </button>
            </div>
        </div>
    )
}

export default AlertButton
