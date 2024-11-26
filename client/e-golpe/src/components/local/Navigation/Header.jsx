import Logo from "./Logo"
const Header = () => {
    return (
        <nav className="h-[70px] place-content-evenly top-0 sticky bg-indigo-600 items-center flex  ">
            <div className="" >
                <div className="logo">
                    <Logo></Logo>
                </div>
            </div>
        </nav>
    )
}

export default Header
