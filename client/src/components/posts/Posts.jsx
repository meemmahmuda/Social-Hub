import Post from "../post/Post";
import "./posts.scss";
import { usePosts } from "../../Hooks/usePosts";

const Posts = () => {
  const { data } = usePosts();
  return (
    <div className="posts">
      {data?.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Posts;
