import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import style from "../styles/Home.module.css";
import plus from "../assets/plus.png";
import user from "../assets/logout.png";
import BlogBtn from "./BlogBtn";


function Home() {
  const navigate = useNavigate();
  const [array, setArray] = useState([]);
  const posts = [];
  useEffect(() => {
    fetch("https://blog-api.adaptable.app/api/all-posts", {
      mode: "cors",
      headers: { authorization: localStorage.getItem("token") },
    }).then(async (res) => {
      if (res.status === 403) {
        navigate("/log-in");
        return;
      }
      const a = await res.json();
      setArray(a.posts);
    });
  }, []);

  for (let i = 0; i < array.length; i++) {
    posts.push(
      <BlogBtn
        key={array[i]._id}
        id={array[i]._id}
        title={array[i].title}
        user={array[i].user}
        timeStamp={array[i].timeStamp}
        content={array[i].content}
      />
    );
  }
  return (
    <>
      <h1 className={style.h1}>Blogs</h1>
      <div className={style.body} id="body">
        <div className={style.btnsdiv}>
          <button
            className={style.newpostbtn}
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/log-in");
            }}
          >
            <img src={user} alt="logout" className={style.userimg} />
          </button>
          <button className={style.newpostbtn}>
            <a href="https://blog-api-website1.vercel.app/post">
              <img src={plus} alt="new post" className={style.newpostimg} />
            </a>
          </button>
        </div>
        <div className={style.blogdiv} id="blogdiv">
          {posts}
        </div>
      </div>
    </>
  );
}

export default Home;
