import Navbar from "./../components/local/Navigation/Navbar"
import Sidebar from "./../components/local/SideBar/Sidebar"
import RightBar from "./../components/local/RightBar/RightBar";
// import Feed from "./../components/local/Feed/Feed"
import Footer from "../components/local/Footer/Footer";
import NewPost from"./../components/local/Feed/NewPost"
const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="py-8 h-96 place-content-around flex space-x-4">
        <Sidebar/>
        <NewPost/>
        <RightBar />
      </div>
      <Footer/>
    </div>
  )
}

export default Home
