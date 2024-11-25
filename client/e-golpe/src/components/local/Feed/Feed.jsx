import NewPost from "./NewPost"
import Posts from "./Posts"

const Feed = () => {
  return (
    <div className=" h-screen w-1/2 flex flex-col space-y-4 ">
        <NewPost></NewPost>       
        <Posts></Posts>
    </div>
  )
}

export default Feed
