import Navbar from "./../components/local/Navigation/Navbar"
import Sidebar from "./../components/local/SideBar/Sidebar"
import RightBar from "./../components/local/RightBar/RightBar";
import Feed from "./../components/local/Feed/Feed"

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="py-8 h-96 place-content-around flex space-x-4">
        <Sidebar/>
        <Feed/>
        <RightBar />
      </div>
    </div>
  )
}

export default Home
