import NewPost from "./NewPost"
import Posts from "./Posts"
import {Array} from "./../../../Data/Data.js"

const Feed = () => {
  return (
    <div className=" h-screen w-1/2 flex flex-col space-y-4 ">
      <NewPost />
      {Array.map((post) => (
        <Posts key={post.id} post={post}/>
      )
      )}

    </div>
  )
}

export default Feed
