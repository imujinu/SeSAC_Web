import axios from "axios";
import { useEffect, useState } from "react";
import PostItem from "./PostItem";

export default function RealPost() {
  // https://jsonplaceholder.typicode.com/posts
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    console.log(response.data);
  };
  //   useEffect의 콜백에는 async를 사용할 수 없음
  //  > async await 을 사용하는 함수를 따로 만들어야 함함
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data.slice(0, 5));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h6>여기는 realPost</h6>
      {posts.length === 0
        ? "...loading..."
        : posts.map((post) => {
            return (
              <PostItem
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
              />
            );
          })}
    </div>
  );
}
