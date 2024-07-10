import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useAxiosPublic } from "../../Hooks/useAxiosPublic";
import { usePosts } from "../../Hooks/usePosts";

const Share = () => {
  const { refetch } = usePosts();
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const data = {
      text,
      email: user.email,
      name: user.displayName || "annonymus",
      img: user.photoURL || "",
      time: new Date(),
    };
    const result = await axiosPublic.post("/post", data);
    if (result.data?.insertedId) {
      refetch();
      e.target.text.value = "";
      alert("post share successfully");
    }
  };
  return (
    <div className="share">
      <div className="container">
        <form onSubmit={handleSubmit} action="">
          <div className="top">
            <img src={user?.profilePic} alt="" />
            <input
              name="text"
              type="text"
              required
              placeholder={`What's on your mind ${user?.name}?`}
            />
          </div>
          <hr />
          <div className="bottom">
            <div className="left">
              <input type="file" id="file" style={{ display: "none" }} />
              <label htmlFor="file">
                <div className="item">
                  <img src={Image} alt="" />
                  <span>Add Image</span>
                </div>
              </label>
              <div className="item">
                <img src={Map} alt="" />
                <span>Add Place</span>
              </div>
              <div className="item">
                <img src={Friend} alt="" />
                <span>Tag Friends</span>
              </div>
            </div>
            <div className="right">
              <button type="submit">Share</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Share;
