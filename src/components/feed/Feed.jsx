import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("posts/timeline/63ef3cbe726d18878e2c6b61");
      setPosts(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => {
          return <Post key={p._id} post={p} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
