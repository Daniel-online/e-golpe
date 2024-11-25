import { IoAlertCircleOutline } from "react-icons/io5";

const AlertButton = () => {
    return (
        <div>
            <div className="alertButton">
                <button className="flex items-center justify-center py-px h-8 w-8 rounded-full bg-red-600 ">
                    <IoAlertCircleOutline className="text-bold text-white h-1/2 w-1/2"></IoAlertCircleOutline>
                </button>
            </div>
        </div>
    )
}

export default AlertButton
