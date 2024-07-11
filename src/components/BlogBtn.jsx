import { useNavigate } from "react-router";

function BlogBtn(prop){
    const navigate = useNavigate();
    return(
        <>
        <button onClick={()=>{
            localStorage.setItem('author', prop.user);
            localStorage.setItem('title', prop.title);
            localStorage.setItem('content', prop.content);
            navigate('/blog');
            }}>
            <h4>{prop.title}</h4>
            <p>{prop.user}</p>
            <p>{prop.timeStamp}</p>
        </button>
        </>
    );
}

export default BlogBtn