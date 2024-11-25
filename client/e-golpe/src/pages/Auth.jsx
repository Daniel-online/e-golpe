import Login from "../components/local/Forms/Login"
import SignUp from "../components/local/Forms/SignUp"
import Header from "../components/local/Navigation/Header"

const Auth = () => {
    return (
        <div>
             <Header />
            <div className="py-8 h-96 place-content-center flex space-x-10">
               <Login></Login>
                <SignUp/>
            </div>
        </div>
    )
}

export default Auth
