import { MoreVert } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import moment from "moment";
import "./Post.css";
import axios from "axios";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  function likeHandler() {
    if (isLiked) {
      setLike((prev) => prev - 1);
      setIsLiked((prev) => !prev);
    } else {
      setLike((prev) => prev + 1);
      setIsLiked((prev) => !prev);
    }
  }

  const avatar = "https://www.w3schools.com/howto/img_avatar.png";

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={user.profilePicture || avatar}
              alt="Anything"
              className="postProfileImg"
            />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{moment(user.createdAt).fromNow()}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.img} alt="nothing" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <span className="postIcon" onClick={likeHandler}>
              👍
            </span>
            <span className="postIcon" onClick={likeHandler}>
              💖
            </span>
            <span className="postLikeCounter">{like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
