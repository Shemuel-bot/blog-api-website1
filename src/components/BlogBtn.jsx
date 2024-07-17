import { useNavigate } from "react-router";


function BlogBtn(prop){
    const navigate = useNavigate();
    let page = '/blog';
    return(
        <>
        <button onClick={()=>{
            localStorage.setItem('postId',prop.id);
            localStorage.setItem('author', prop.user);
            localStorage.setItem('title', prop.title);
            localStorage.setItem('content', prop.content);
            navigate(page);
            }}>
            <h4>{prop.title}</h4>
            <p>{prop.user}</p>
            <p>{prop.timeStamp}</p>
        </button>
        
        </>
    );
}

export default BlogBtn