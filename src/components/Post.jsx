import style from "../styles/Post.module.css";


const handleSubmit = () => {
  

  fetch("https://blog-api.adaptable.app/api/post", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      title: document.getElementById("title").value,
      content: document.getElementById("content").value,
    }),
  }).then((res) => {
    console.log(localStorage.getItem('token'))
    if (res.status === 403) {
      window.location.href = "https://blog-api-website1.vercel.app/log-in";
      return;
    }
    window.location.href = "https://blog-api-website1.vercel.app/home";
  });
};
function App() {
  return (
    <>
      <h4>Title</h4>
      <input type="text" placeholder="Title..." id="title" />
      <h4>Content</h4>
      <textarea className={style.textarea}
        name=""
        id="content"
        placeholder="Blog Content here..."
      ></textarea>
      <div id="options">
        <button onClick={() => handleSubmit()}>Post</button>
        <a href="https://blog-api-website1.vercel.app/home">
          <button>Cancel</button>
        </a>
      </div>
    </>
  );
}

export default App;
